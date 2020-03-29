const Model = require('./Model');

class Account extends Model {

    static getAccounts(id) {
        const pk = this.primaryKey;
        return {
            id,
            pk
        };
    }
    
}

module.exports = Account;