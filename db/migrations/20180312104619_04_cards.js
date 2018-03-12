exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', function(table){
    table.increments();
      table.string('card')
      table.integer('column_id')
      table.text('content')
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('ucreated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('cards');
};
