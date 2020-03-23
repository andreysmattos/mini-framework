const Controller = require('./Controller');
const Account = require('../../models/Account');

class AccountsController extends Controller {

    async index(req, res) { 
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