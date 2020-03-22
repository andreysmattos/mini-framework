const express = require('express');
const routes = require('./routes/index');

require('dotenv').config({
    path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
});

class App {

    constructor() {
        this.express = express();
        this.routes();
        this.middlawares();
    }

    routes(){
        this.express.use(routes);
    }

    middlawares(){
        this.express.use( express.json() )
    }   
}

module.exports = new App().express;