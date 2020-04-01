describe('Errors', () => {
  it('Deve retornar uma mensagem de erro personalizada caso faltar algum parametro.', () => {
    const { MissingParamError } = require('../../src/lib/errors')

    expect(() => {
      throw new MissingParamError('E-mail')
    }).toThrow(new MissingParamError('E-mail'))
  })

  it('Deve retornar uma mensagem de erro personalizada caso algum parametro for invalido.', () => {
    const { InvalidParamError } = require('../../src/lib/errors')

    expect(() => {
      throw new InvalidParamError('E-mail')
    }).toThrow(new InvalidParamError('E-mail'))
  })

  it('Retornar uma mensagem de erro dentro do metodo da classe', () => {
    const { MissingParamError } = require('../../src/lib/errors')

    class TestErrors {
      init (a, b) {
        if (!a) throw new MissingParamError('a')

        if (!b) throw new MissingParamError('b')

        return true
      }
    }

    const teste = new TestErrors()

    function startError () {
      teste.init()
    }

    function startError2 () {
      teste.init(1)
    }

    expect(startError).toThrow(new MissingParamError('a'))
    expect(startError2).toThrow(new MissingParamError('b'))
  })


  it('Deve retornar um SERVER ERROR', () => {
    const { ServerError } = require('../../src/lib/errors')

    expect(() => {
      throw new ServerError()
    }).toThrow(new ServerError())


  })

  it('Deve retornar um BadRequest', () => {
    const { BadRequestError } = require('../../src/lib/errors')

    expect(() => {
      throw new BadRequestError()
    }).toThrow(new BadRequestError())

  
  })
})
