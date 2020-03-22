const knex = require('../../config/database');

class Model {


    static get primaryKey(){
        return 'id';
    }
    
    static get table(){
        return this.name.toLowerCase();
    }

    static query (){
        return knex('users');
    }


    save(){
        console.log('save start')
        console.log(this.constructor['table']);
        console.log(this)
        console.log('save end')
    }

    /*
    constructor(){
        this.db = knex
    }

    static get primaryKey(){
        return 'id';
    }

    static get db(){
        return knex;
    }

  */

    
}

module.exports = Model;