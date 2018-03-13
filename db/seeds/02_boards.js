
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {board_name: 'Productivity', owner_id: '2'},
        {board_name: 'Invoices', owner_id: '3'},
        {board_name: 'Comic Books', owner_id: '1'},
      ]);
    });
};
