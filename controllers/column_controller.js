const knex = require("../db/knex.js");

module.exports = {

  columns: function(req, res){

  },

  create_column: function(req, res){


    knex('columns')
    .insert({
      board_id: req.body.board_id,
      column_name: req.body.column_name
    })
    .then((results)=>{
      res.redirect(`/board/${req.body.board_id}`)
    })
    .catch((error)=>{
        console.log('error:', error);
        res.sendStatus(500);
    })
  },

  edit_column: function(req, res){
    knex('columns')
    .where('id', req.params.id)
    .update({
      board_name: req.body.column_name,
    })
    .then((result)=>{
        res.render('single_board', {column:result})
    })
    .catch((error)=>{
        console.log('error:', error);
        res.sendStatus(500);
    })
  },

  delete_column: function(req, res){
    knex('columns')
    .where('id', req.params.id)
    .del()
    .then((result)=>{
        res.render('single_board', {column:result})
    })
    .catch((error)=>{
        console.log('error:', error);
        res.sendStatus(500);
    })
  },
}
