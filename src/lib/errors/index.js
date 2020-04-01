const MissingParamError = require('./MissingParamError')
const InvalidParamError = require('./InvalidParamError')
const UnauthorizedError = require('./UnauthorizedError')

/**
 * => Use: throw new MissingParamError('E-mail')
 * => Use: throw new MissingParamError('E-mail', 400)
 * => Use: throw new InvalidParamError('E-mail')
 */

module.exports = {
  MissingParamError,
  InvalidParamError,
  UnauthorizedError
}
