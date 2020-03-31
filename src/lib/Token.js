// REFATORAR TUDO QUE TEM A VER COM TOKEN.
const jwt = require('jsonwebtoken');
const { MissingParamError, InvalidParamError, UnauthorizedError } = require('./errors/index');

class Token {
    constructor() {
        this.secret = process.env.TOKEN
    }

    async generate(id) {
        if (!this.secret) {
            throw new MissingParamError('secret', 500);
        }

        if (!id) {
            throw new MissingParamError('id');
        }

        return jwt.sign({ _id: id }, this.secret, {
            expiresIn: '24h'
        });
    }


    /**
     * @param  { String } token JWToken
     * @return {Object} {id, exp, iat}
     */
    async verify(token) {
        if (!this.secret) {
            throw new MissingParamError('secret', 500);
        }

        if (!token) {
            throw new UnauthorizedError();
        }

        return await jwt.verify(token, this.secret, (err, decoded) => {
            if (err) {
                throw new UnauthorizedError();
            }
            return decoded;
        })

    }

}

module.exports = Token;