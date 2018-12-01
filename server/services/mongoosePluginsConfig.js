import userSchema from '../models/User';
import visitorSchema from '../models/Visitor';
import autoIncrement from 'mongoose-auto-increment';

export default mongoosePluginsConfig => {
    userSchema.plugin(autoIncrement.plugin, {model:'users',field:'UserID'});
    visitorSchema.plugin(autoIncrement.plugin, {model:'visitors',field:'VisitorID'});
};
