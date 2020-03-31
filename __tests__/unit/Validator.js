const { EmailValidator, TokenValidator } = require('../../src/lib/validation');


describe('EmailValidator', () => {
    it('Deve retornar FALSE ao passar um email sem @', () => {
        const email = 'any_email.com.br';
        const validate_email = EmailValidator.isValid(email);
        expect(validate_email).toBe(false);
    });

    it('Deve retornar ERRO ao não passar um email', () => {
        const email = '';
        expect( () => EmailValidator.isValid(email) ).toThrow();
    });

    it('Deve retornar ERRO ao não passar um email', () => {
        const email = '';
        expect( () => EmailValidator.isValid(email) ).toThrow();
    });

});

describe('TokenValidator', () => {

    require('dotenv').config({
        path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
    });
    
    const TokenClass = require('../../src/lib/Token');

    it('Deve retornar FALSE ao passar um token INVALIDO', () => {
        const token = 'any_token_daskjldlakjdlaçdlaml.dasçkdaçdaskda.joasfdhdfjjsdkjfsdl';
        const validate_token = TokenValidator.isValid(token);
        expect(validate_token).toBe(false);
    });

    it('Deve retornar TRUE ao passar um token VALIDO', async () => {
        const Token = new TokenClass();
        const token = await Token.generate(12);
        const validate_token = TokenValidator.isValid(token);
        expect(validate_token).toBe(true);
    });

    it('Deve retornar TRUE ao passar um token VALIDO', async () => {
        const Token = new TokenClass();
        const token = await Token.generate(12);
        const validate_token = TokenValidator.isValid(token);
        expect(validate_token).toBe(true);
    });

    it('Deve retornar TRUE ao passar um token VALIDO', async () => {
        const Token = new TokenClass();
        const token = await Token.generate(12);
        const validate_token = TokenValidator.isValid(token);
        expect(validate_token).toBe(true);
    });

});