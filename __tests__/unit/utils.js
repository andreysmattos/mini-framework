const util = require('../../src/lib/util')

describe('Lib Utils - Utilidades para usar em todo projeto.', () => {
  it('Deve verificar se um valor existe. Não pode ser NULO, UNDEFINED, STRING VAZIA OU APENAS ESPAÇOS ', () => {
    expect(util.existy('')).toBe(false)
    expect(util.existy(' ')).toBe(false)
    expect(util.existy('               ')).toBe(false)
    expect(util.existy(null)).toBe(false)
    expect(util.existy(undefined)).toBe(false)
    expect(util.existy('       .        ')).toBe(true)
    expect(util.existy(1)).toBe(true)
    expect(util.existy(false)).toBe(true)
    expect(util.existy(true)).toBe(true)
    expect(util.existy(-1)).toBe(true)
    expect(util.existy(0)).toBe(true)
    expect(util.existy(Infinity)).toBe(true)
  })

  it('Transformar uma string CamelCase em snake_case', () => {
    expect(util.snakeCase('Account')).toBe('account')
    expect(util.snakeCase('AccountName')).toBe('account_name')

    expect(util.snakeCase('AccountNameUser')).toBe('account_name_user')

    expect(util.snakeCase('UsersController')).toBe('users_controller')

    expect(util.snakeCase('UserProperty')).toBe('user_property')
  })

  it('Deve gerar o nome da tabela com base no nome do Model. (Tudo em minusculo, snake-case, plural)', () => {
    // /* Palavra única */
    expect(util.makeTableName('Account')).toBe('accounts')
    expect(util.makeTableName('User')).toBe('users')
    expect(util.makeTableName('Property')).toBe('properties')

    // /* Mais de uma palavra */
    expect(util.makeTableName('AccountName')).toBe('account_names') // melhorar isso

    expect(util.makeTableName('UsersController')).toBe('users_controllers')

    expect(util.makeTableName('UserProperty')).toBe('user_properties')
  })
})
