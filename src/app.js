const express = require('express');
const helmet = require('helmet');
const routes = require('./routes/index');

require('dotenv').config({
    path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
});

class App {

    constructor() {
        this.express = express();
        this.middlawares();
        this.routes();
        this.errorHandler();
    }

    middlawares() {
        this.express.use(express.json())
        this.express.use(helmet());
    }

    routes() {
        this.express.use(routes);
    }

    errorHandler() {
        this.express.use(function (error, req, res, next) {
            res.status(error.status || 500);
            return res.send({
                error: {
                    mensagem: error.message
                }
            });
        });
    }


}

module.exports = new App().express;