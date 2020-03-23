const router = require('express').Router();

// Controllers
const AccountsController = require('../app/http/controllers/AccountsController');
const auth = require('../app/http/middlawares/Auth');

router
    .route('/accounts')
    .get(AccountsController.index)
    .post(AccountsController.store)
    .delete()
    .put();


router.get('/andrey',function (req, res) {

    res.send({
        'xd': 'xd'
    })
})

router.post('/andrey',async function (req, res) {
    console.log(req.body);

    res.send({
        'xd': 'xd'
    })
})

module.exports = router;