const Controller = require('./Controller');
const Account = require('../../models/Account');

class AccountsController extends Controller {
    constructor() {
        super()
        console.log(this)
        this.validator = super.validator.bind(this)
    }

    index(req, res) {
        this.validator()
    }


    store(req, res){
        return ''
    }
}

module.exports = new AccountsController();