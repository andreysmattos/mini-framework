const Controller = require('./Controller');
// const Account = require('../../models/Account');

const { MissingParamError, InvalidParamError} = require('../../../lib/errors');

class AccountsController extends Controller {
  constructor() {
    super();
  }

  index(req, res) {
    throw new MissingParamError('email');
    const joi = super.validator();
    res.send({ das: 'DAS' });
  }

  store(req, res) {
    return '';
  }

}

module.exports = new AccountsController();