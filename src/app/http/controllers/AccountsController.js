const Controller = require('./Controller')
// const Account = require('../../models/Account')

const { MissingParamError } = require('../../../lib/errors')

class AccountsController extends Controller {
  index (req, res) {
    throw new MissingParamError('das')
    // res.send({ das: 'DAS' })
  }

  store (req, res) {
    return ''
  }
}

module.exports = new AccountsController()
