const { EmailValidator } = require('../../src/lib/validation');


describe('Validator', () => {
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