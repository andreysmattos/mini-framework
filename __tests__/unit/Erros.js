describe('Errors', () => {

    it('Deve retornar uma mensagem de erro personalizada caso faltar algum parametro.', () => {
        const { MissingParamError } = require('../../src/lib/errors');

        expect(() => {
            throw new MissingParamError('E-mail')
        }).toThrow(new MissingParamError('E-mail'));

    });

    it('Deve retornar uma mensagem de erro personalizada caso algum parametro for invalido.', () => {
        const { InvalidParamError } = require('../../src/lib/errors');

        expect(() => {
            throw new InvalidParamError('E-mail')
        }).toThrow(new InvalidParamError('E-mail'));

    });

});