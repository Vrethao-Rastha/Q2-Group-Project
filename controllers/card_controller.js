const knex = require("../db/knex.js");

module.exports = {

  cards: function(req, res){

  },

  create_card: function(req, res){

    knex('cards')
    .where('card_id', req.params.id)
    .insert({
      card_name: req.body.card_name,
      parent_column_id: req.params.parent_column_id,
      content: 'Add your content here!'
    })
    .then((results)=>{
      res.redirect('/board/9')
    })
    .catch((error)=>{
        console.log('error:', error);
        res.sendStatus(500);
    })
  },

    edit_card: function(req, res){
      knex('cards')
      .where('id', req.params.id)
      .update({
        card_name: req.body.card_name
        // EDIT CARD CONTENT HERE?
        //card_content: req.body.card_content
      })
      .then((result)=>{
          res.render('single_board', {card:result})
      })
      .catch((error)=>{
          console.log('error:', error);
          res.sendStatus(500);
      })
    },

    delete_card: function(req, res){
      knex('cards')
      .where('id', req.params.id)
      .del()
      .then((result)=>{
          res.render('single_board', {card:result})
      })
      .catch((error)=>{
          console.log('error:', error);
          res.sendStatus(500);
      })
    },

}
