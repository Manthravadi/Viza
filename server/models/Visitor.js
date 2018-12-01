import mongoose from 'mongoose';
import {Schema} from 'mongoose';

const visitorSchema = new Schema({
    badgeID: String,
    name:String,    
    from: String,
    purpose: String,
    host:String,
    inTime:Date,
    outTime:Date,
    profileImage:{data:Buffer,contentType:String}
});

mongoose.model('Visitors',visitorSchema);

export default visitorSchema;