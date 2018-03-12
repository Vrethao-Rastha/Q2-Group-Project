exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
    table.increments();
      table.string('name')
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('ucreated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('user');
};
