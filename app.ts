require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
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
    }
}

export =new App().app;
