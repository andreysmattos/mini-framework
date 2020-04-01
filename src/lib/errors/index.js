const MissingParamError = require('./MissingParamError')
const InvalidParamError = require('./InvalidParamError')
const UnauthorizedError = require('./UnauthorizedError')
const BadRequestError = require('./BadRequestError')
const ServerError = require('./ServerError')

/**
 * => Use: throw new MissingParamError('E-mail')
 * => Use: throw new MissingParamError('E-mail', 400)
 * => Use: throw new InvalidParamError('E-mail')
 */

module.exports = {
  MissingParamError,
  InvalidParamError,
  UnauthorizedError,
  BadRequestError,
  ServerError
}
