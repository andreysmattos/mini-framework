const request = require('supertest')
const app = require('../../src/app')
const TokenClass = require('../../src/lib/Token')

describe('Middleware AUTH', () => {
  it('Deve retornar um ERRO por passar um token INVALIDO.', async () => {
    const token = 'any_token.any_token.any_token'

    const response = await request(app)
      .post('/verify')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.body).toHaveProperty('error')
  })

  it('Deve retornar o ID quando passar um token VALIDO.', async () => {
    const Token = new TokenClass()
    const token = await Token.generate(189)

    const response = await request(app)
      .post('/verify')
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('_id', 189)
    expect(response.body).toHaveProperty('message', 'Authenticou')
  })
})
