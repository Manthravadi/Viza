import passport from 'passport';
import AzureAdOAuth2Strategy from 'passport-azure-ad-oauth2';
import keys from '../config/keys';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { access } from 'fs';

const User = mongoose.model('Users');

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then(user=>{
        done(null, user);
    });
});

export default app => {
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(
        new AzureAdOAuth2Strategy(
            {
                clientID:keys.Azure.clientID,
                clientSecret: keys.Azure.clientSecret,
                callbackURL: "/auth/azure/callback"
            },
            async (accessToken,refreshToken,params, profile,done)=>{
                console.log(accessToken);
                var userProfile = jwt.decode(params.id_token);
                const existingUser = await User.findOne({EmailAddress: userProfile.unique_name},(err,res)=>{
                    if(err){
                        console.log("Err",err);
                    }
                })
                if(existingUser){
                    User.update({EmailAddress: userProfile.unique_name},existingUser,(err,raw)=>{
                        if(err){
                            console.log("err", err);
                        }
                    });
                    done(null, existingUser);
                }
                else{
                    const user = await new User({CreatedOn:Date.now(), LastName: userProfile.family_name, FirstName: userProfile.given_name, LastSeen: Date.now(),EmailAddress:userProfile.unique_name, AccessToken:accessToken}).save();
                    done(null, user);
                }
            }       
        )
    );
}