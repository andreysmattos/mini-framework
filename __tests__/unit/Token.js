require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
})

const TokenClass = require('../../src/lib/Token')
const { MissingParamError } = require('../../src/lib/errors/index')

describe('Token', () => {
  it('Deve retornar erro caso não passar um ID', async () => {
    const Token = new TokenClass()
    const promise = Token.generate()
    expect(promise).rejects.toThrow(new MissingParamError('id'))
  })

  it('Deve retornar um token valido', async () => {
    const Token = new TokenClass()
    const token = await Token.generate(55)
    expect(token).not.toBeNull()
  })

  it('Deve retornar um erro se o token for invalido', async () => {
    const Token = new TokenClass()
    const token = await Token.generate(55)
    expect(token).not.toBeNull()

    const response = Token.verify('any_token')
    expect(response).rejects.toThrow()
  })

  it('Deve validar se um Token é valido.', async () => {
    const Token = new TokenClass()
    const token = await Token.generate(55)
    expect(token).not.toBeNull()
    const response = await Token.verify(token)
    expect(response._id).toBe(55)
  })
})
