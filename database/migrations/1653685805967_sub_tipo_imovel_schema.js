'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubTipoImovelSchema extends Schema {
  up () {
    this.create('sub_tipos_imoveis', (table) => {
      table.increments()
      table.string('descricao', 250).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('sub_tipos_imoveis')
  }
}

module.exports = SubTipoImovelSchema
