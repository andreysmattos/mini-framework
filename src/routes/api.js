const router = require('express').Router();

// Controllers
const AccountsController = require('../app/http/controllers/AccountsController');

router
    .route('/accounts')
    .get(AccountsController.index)
    .post(AccountsController.store)
    .delete()
    .put();

module.exports = router;