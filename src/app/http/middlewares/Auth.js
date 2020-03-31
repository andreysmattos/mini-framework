const TokenClass = require('../../../lib/Token');
const { MissingParamError, InvalidParamError, UnauthorizedError } = require('../../../lib/errors');
const { TokenValidator } = require('../../../lib/validation');

module.exports = async (req, res, next) => {
    try {

        const { authorization } = req.headers;

        if (!authorization) {
            throw new UnauthorizedError();
        }

        const parts = authorization.split(' ');

        if (parts.length !== 2) {
            throw new InvalidParamError('Header Authorization');
        }

        const [scheme, token] = parts;

        if (! /^Bearer$/i.test(scheme)) {
            throw new InvalidParamError('Header Authorization');
        }

        // Validar aki ou no verify ????
        if (!TokenValidator.isValid(token)) {
            throw new InvalidParamError('Header Authorization');
        }

        // MUDAR ESSES NOMES!!!! Token?? token? TokenClass???? tá mt parecido!
        const Token = new TokenClass();
        const tokenData = await Token.verify(token);
        req.userId = tokenData._id;

        next();

    } catch (e) {
        next(e);
    }
}