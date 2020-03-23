const router = require('express').Router();

// Controllers
const AccountsController = require('../app/http/controllers/AccountsController');

router.route('/accounts')
    .get(AccountsController.index)
    .post(AccountsController.store)
    .delete()
    .put();


    router.get('/andrey', function (req, res){

        throw 42;

        res.send({
            'xd': 'xd'
        })
    })

    router.post('/andrey', async function (req, res){
        console.log( req.body );

        res.send({
            'xd': 'xd'
        })
    })

module.exports = router;