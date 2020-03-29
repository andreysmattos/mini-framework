const router = require('express').Router();

const AccountsController = require('../app/http/controllers/AccountsController');

router.route('/accounts')
    .get(AccountsController.index)
    .post(AccountsController.store);

module.exports = router;