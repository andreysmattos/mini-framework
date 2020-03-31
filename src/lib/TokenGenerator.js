const jwt = require('jsonwebtoken');
const { MissingParamError } = require('../lib/errors/index');

class TokenGenerator {
    constructor() {
        this.secret = process.env.TOKEN
    }

    async generate(id) {
        if (!this.secret) {
            throw new MissingParamError('secret');
        }

        if (!id) {
            throw new MissingParamError('id');
        }

        return jwt.sign({ _id: id }, this.secret, {
            expiresIn: '24h'
        });
    }
}

module.exports = TokenGenerator;