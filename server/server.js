import express from 'express';
import keys from './config/keys';
import mongooseConfig from './services/mongoose';
import passportConfig from './services/passport';
import configRoutes from './routes/index';
import mongoosePluginsConfig from './services/mongoosePluginsConfig';

const app = express();

mongooseConfig();
mongoosePluginsConfig();

passportConfig(app);
configRoutes(app);

const port = keys.Port;

app.listen(port,()=>{
    console.log(`Started listening on Port ${port}`);    
});


