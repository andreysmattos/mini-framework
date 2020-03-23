const router = require('express').Router();

const knex = require('../config/database');

// Controllers
const AccountsController = require('../app/http/controllers/AccountsController');

router.route('/accounts')
    .get(AccountsController.index)
    .post(AccountsController.store)
    .delete()
    .put();


router.get('/andrey', async function (req, res){

    const query = await knex('users').select('email')

    console.log(query);

    res.send({
        'xd': 'xd'
    })
})

module.exports = router;