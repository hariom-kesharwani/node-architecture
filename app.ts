import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
require('dotenv').config();
import logger from './logger';
const routes = require('./routes');
class App {

    public app:any;

    constructor() {
        this.app= express();
        this.config();
    }

    public async config() {
        await require('./helpers/loader').default({ expressApp: this.app })
        this.app.use(cors());
        this.app.use(bodyParser.json({limit: '50mb'}));
        this.app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));

        this.app.use("/api", routes);

        //Error Handler
        this.app.use((err:any, req:express.Request, res:express.Response, next:express.NextFunction) => {
            
            //Logging an error
            logger.error(err);

            //Send the response to client.
            res
            .status(err.status || 500)
            .send({
                success: false,
                error: {
                    message: err.message,
                },
            });
        });
    }
}

export =new App().app;
