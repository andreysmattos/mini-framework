require('dotenv').config({
    path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
});

const TokenGenerator = require('../../src/lib/TokenGenerator');
const { MissingParamError } = require('../../src/lib/errors/index');

describe('Token', () => {

    it('Deve retornar erro caso não passar um ID', async () => {
        const Token = new TokenGenerator();
        const promise = Token.generate();
        expect(promise).rejects.toThrow(new MissingParamError('id'));
    });

    it('Deve retornar um token valido', async () => {
        const Token = new TokenGenerator();
        const token = await Token.generate(55);
        expect(token).not.toBeNull();
    });

})