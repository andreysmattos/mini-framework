const pluralize = require('pluralize')
const util = {}

/**
 * verificar se um valor existe. Não pode ser NULO, UNDEFINED, STRING VAZIA OU APENAS ESPAÇOS
 *
 * @param  {Mixed} value
 *
 * @returns {Boolean}
 */
util.existy = value => typeof (value) === 'string' ? value.trim().length > 0 : value !== undefined && value !== null

/**
 * Transforma uma string CamelCase em snake_case
 *
 * @param  {String}
 *
 * @returns {String}
 *
 * @example
 *
 * util.snakeCase('Account')
 * // => 'account'
 *
 * util.snakeCase('AccountName')
 * // => 'account_name'
 *
 * util.snakeCase('AccountNameUser')
 * // => 'account_name_user'
 *
 * util.snakeCase('UsersController')
 * // => 'users_controller'
 *
 *
 */
util.snakeCase = (string) => string.replace(/(?:^|\.?)([A-Z])/g, function (x, y) { return '_' + y.toLowerCase() }).replace(/^_/, '')

/**
 * Deve gerar o nome da tabela com base no nome do Model. (Tudo em minusculo, snake-case, plural)
 *
 * @param  {String} modelName
 * @return  {String}
 *
 * @example
 *
 * util.makeTableName('Account')
 * // => 'accounts'
 *
 * util.makeTableName('User')
 * // => 'users'
 *
 * util.makeTableName('UsersController')
 * // => 'users_controllers'
 *
 * util.makeTableName('UserProperty')
 * // => 'user_properties'
 */
util.makeTableName = (modelName) => util.snakeCase(pluralize(modelName))

module.exports = util
