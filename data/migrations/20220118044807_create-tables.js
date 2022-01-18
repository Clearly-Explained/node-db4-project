
exports.up = async function(knex) {
  await knex.schema
    .createTable('recipies', tbl => {
        tbl.increments('recipie_id')
        tbl.string('recipie_name', 200).notNullable().unique()
    })
    .createTable('ingredients', table => {
        table.increments('ingredient_id')
        table.string('ingredient_name', 200).notNullable().unique()
        table.string('ingredient_unit', 50)
    })
    .createTable('steps', table => {
        table.increments()
    })
    .createTable('step_ingredients', table => {
        table.increments()
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipies')
};
