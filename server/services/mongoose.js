import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import keys from '../config/keys';
require('../models/index');


export default mongooseConfig => {
    mongoose.connect(keys.MongoURI,(err)=>{
        if(err){
            console.log("MongoDB Connection Error");
            process.exit(1);
        }
    });  
    autoIncrement.initialize(mongoose.connection);
}