
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {card_name: 'Card 1', column_id: '1', content:'Content 1'},
        {card_name: 'Card 2', column_id: '1', content:'Content 2'},
        {card_name: 'Card 3', column_id: '1', content:'Content 3'},
        {card_name: 'Card 4', column_id: '1', content:'Content 4'},
        {card_name: 'Card 5', column_id: '3', content:'Content 5'},
        {card_name: 'Card 6', column_id: '3', content:'Content 6'},

      ]);
    });
};
