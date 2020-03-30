const Controller = require('./Controller');
// const Account = require('../../models/Account');

class AccountsController extends Controller {
  constructor() {
    super();
  }

  index(req, res) {
    const joi = super.validator();
    res.send({ das: 'DAS' });
  }

  store(req, res) {
    return '';
  }

}

module.exports = new AccountsController();