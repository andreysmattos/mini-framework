const validator = require('validator');
const { MissingParamError } = require('../errors');

class TokenValidator {
    static isValid(token) {
        if (!token) {
            throw new MissingParamError('token');
        }
        return validator.isJWT(token)
    }
}

module.exports = TokenValidator;