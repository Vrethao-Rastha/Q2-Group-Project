exports.up = function(knex, Promise) {
  return knex.schema.createTable('columns', function(table){
    table.increments();
      table.string('column_name')
      table.integer('board_id')
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('ucreated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('columns');
};
