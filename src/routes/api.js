const router = require('express').Router();
const Auth = require('../app/http/middlewares/Auth');

const AccountsController = require('../app/http/controllers/AccountsController');

router.route('/accounts')
    .get(AccountsController.index)
    .post(AccountsController.store);



/* Rotas para TDD - Teste de Integração */
router.post('/verify', Auth, (req, res) => {

    res.status(200).json({
        'message': 'Authenticou',
        '_id': req.userId
    });

});


module.exports = router;