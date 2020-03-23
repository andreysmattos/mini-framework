const knex = require('../../config/database');
const util = require('../../lib/util')

class Model {

    static get primaryKey() {
        return 'id';
    }

    static get table() {
        return util.makeTableName(this.name);
    }

    static query(table = this.table) {
        return knex(table);
    }

    static findBy(key, value) {
        return this.query().where(key, value).first();
    }

    static find(value) {
        return this.findBy(this.primaryKey, value).first();
    }

    static all() {
        return this.query();
    }

    static async getCount(columnName = '*'){
        const qtd = await this.query().count({quantidade: columnName}).first();
        if( ! qtd) return 0;
        return qtd.quantidade;
    }

}

module.exports = Model;