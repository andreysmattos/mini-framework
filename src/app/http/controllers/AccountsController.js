const Controller = require('./Controller');
// const Account = require('../../models/Account');

class AccountsController extends Controller {
  constructor() {
    super();
  }

  index(req, res) {
    const joi = super.validator();
    console.log('joi', joi);

    res.send({ das: 'DAS' });
  }

  store(req, res) {
    return '';
  }

}

module.exports = new AccountsController();