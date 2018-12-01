import express from 'express';
import keys from './config/keys';
import mongooseConfig from './services/mongoose';
import passportConfig from './services/passport';
import configRoutes from './routes/index';
import mongoosePluginsConfig from './services/mongoosePluginsConfig';
import expressSession from 'express-session';
import bodyParser from 'body-parser';

const app = express();

var session = {
    secret:'Muhahahahahahaa',
    resave: false,
    saveUninitialized:true
}
app.use(expressSession(session));
mongooseConfig();
mongoosePluginsConfig();

passportConfig(app);
configRoutes(app);

const port = keys.Port;


app.listen(port,()=>{
    console.log(`Started listening on Port ${port}`);    
});


