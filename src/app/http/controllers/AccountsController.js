const Account = require('../../models/Account');

class AccountsController {

    async index(req, res) {

        // knex('table')
        const conta = new Account();

        console.log( await Account.query().where('email', 'andreysmattos@hotmail.com') );

        // console.log( Account.table )




        // console.log(conta.getPK())

        // const xxxxt = await Account.db('users');
        // console.log('xxxxt', xxxxt);   

        res.send({
            message: 'Informação de teste',
            data: {
            }
        });
    }

    store(req, res) {
        res.send({
            message: 'Informação de teste',
            data: req.body
        });
    }
}

module.exports = new AccountsController();