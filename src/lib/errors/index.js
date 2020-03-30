const MissingParamError = require('./MissingParamError');
const InvalidParamError = require('./InvalidParamError');

/**
 * => Use: throw new MissingParamError('E-mail')
 * => Use: throw new InvalidParamError('E-mail')
 */


module.exports = {
    MissingParamError,
    InvalidParamError
}