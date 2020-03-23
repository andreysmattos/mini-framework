const Joi = require('@hapi/joi');

class Controller {
    constructor() {
        /**
         * DOC
         * https://hapi.dev/module/joi/#usage
         */
        this.validator = Joi;
    }


}

module.exports = Controller;