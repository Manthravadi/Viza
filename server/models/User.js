import mongoose from 'mongoose';
import {Schema} from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const userSchema = new Schema({
    LastName:{
        type: String,
        required: true
    },
    FirstName:{
        type:String,
        required: true
    },
    LastSeen:{
        type:Date,
        required:false
    },
    EmailAddress:{
        type:String,
        required: true,
        index: {unique: true}
    }
});
mongoose.model('Users',userSchema); 
export default userSchema;