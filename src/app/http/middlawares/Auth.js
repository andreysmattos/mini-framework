// const jwt = require('jsonwebtoken');
const Token = require('../../../lib/Token');
const { MissingParamError, InvalidParamError } = require('../../../lib/errors');
const { TokenValidator } = require('../../../lib/validation');

module.exports = (req, res, next) => {
    try {

        const { authorization } = req.headers;

        if (!authorization) {
            throw new MissingParamError('Header Authorization');
        }

        const parts = authorization.split(' ');

        if (parts.length !== 2) {
            throw new InvalidParamError('Header Authorization');
        }

        const [scheme, token] = parts;

        if (! /^Bearer$/i.teste(scheme)) {
            throw new InvalidParamError('Header Authorization');
        }

        if (!TokenValidator.isValid(token)) {
            throw new InvalidParamError('Header Authorization');
        }

        // Verificar TOKEN AKI.
        Token.verify();

    } catch (e) {
        next(e);
    }
}