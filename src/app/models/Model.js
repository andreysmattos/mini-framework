const knex = require('../../config/database')
const util = require('../../lib/util')

class Model {
  /**
     * Define a primaryKey do model pra "id"
     * Você pode alterar isso no seu model
     */
  static get primaryKey () {
    return 'id'
  }

  /**
     * Cria o Nome na tabela baseado no nome do Model.
     * Você pode alterar isso no seu model
     */
  static get table () {
    return util.makeTableName(this.name)
  }

  /**
     * Retorna o queryBuilder
     * @param  {String} TableName Banco de dados
     * @return {Object} Knex('table')
     */
  static query (table = this.table) {
    return knex(table)
  }

  /**
     * Busca pelo valor informado na coluna informada.
     *
     * @param  {String} key Coluna do Banco de Dados
     * @param  {String} value Valor a Procurar
     *
     * @return {Object} First
     */
  static findBy (key, value) {
    return this.query().where(key, value).first()
  }

  /**
     * Busca pela primarykey
     * @param  {Any} value Primary Key Value
     * @return {Object} First
     */
  static find (value) {
    return this.findBy(this.primaryKey, value).first()
  }

  /**
     * Retorna todos os dados do Model.
     * @return {Array}
     */
  static all () {
    return this.query()
  }

  /**
     * Conta as linhas de uma determinada coluna
     * @param  {String} columnName='*'
     */
  static async getCount (columnName = '*') {
    const qtd = await this.query().count({ quantidade: columnName }).first()
    if (!qtd) return 0
    return qtd.quantidade
  }
}

module.exports = Model
