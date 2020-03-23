const Model = require('./Model');

class Account extends Model {   
   
    static getAccounts(id){

        // console.log(this.db);

         const pk = this.primaryKey;
        return {
            id,
            pk
        };

    }
}

module.exports = Account;