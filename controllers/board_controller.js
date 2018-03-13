const knex = require("../db/knex.js");

module.exports = {

  //NEEDS USER ID IN ROUTE (/:ID)
  boards: function(req, res){
    knex('boards')
      .where('user_id', req.session.user.id)
      .then((result)=>{

      })
      .catch((error)=>{
        console.log(error);
        res.sendStatus(500);
      })
    res.render('boards'/*,{}*/)
  },

  single_board: function(req, res){
    knex('boards')
      .where('boards.board_id', req.params.board_id)
      .innerJoin('columns', {'boards.board_id': 'columns.board_id'})
      .innerJoin('cards', {'columns.column_id': 'cards.column_id'})
      .then((result) =>{

          knex('cards')

          console.log(result)

          res.render('single_board', {
            boardInfo: result
          });
      })
      .catch((error)=>{
        console.log(error);
        res.sendStatus(500);
      })
  },

  //PASS LIST OF CONTRIBUTORS FOR SINGLE BOARD
  //INNER JOIN THIS TO GET NAME OF CONTRUBUTOR ON FUTURE QUERRY
  contributors: function(req, res){
    res.render('single_board'/*,{}*/)
  },

  create_board: function(req, res){
    knex('boards')
      .insert({
        board_name: req.body.board_name,
        owner_id: req.session.user.id
      })
      .then((result)=>{
          res.render('single_board', {board:result})
      })
      .catch((error)=>{
          console.log('error:', error);
          res.sendStatus(500);
      })
  },

  update_board: function(req, res){
    knex('boards')
    .where('id', req.params.id)
    .update({
      //for now, this only lets you change the name of the board.
      board_name: req.body.board_name,
    })
    .then((result)=>{
        res.render('single_board', {board:result})
    })
    .catch((error)=>{
        console.log('error:', error);
        res.sendStatus(500);
    })
  },

  delete_board: function(req, res){
    knex('boards')
    .where('id', req.params.id)
    .del()
    .then((result)=>{
        res.render('single_board', {board:result})
    })
    .catch((error)=>{
        console.log('error:', error);
        res.sendStatus(500);
    })
  },

  add_contributor: function(req, res){
    knex('contributors')
    .where('board_id', req.body.board_id)
    .insert({
      user_id: req.body.user_id,
      board_id: req.body.board_id
    })
    .then((results)=>{
      res.render('single_board',{contributors:results})
    })
    .catch((error)=>{
        console.log('error:', error);
        res.sendStatus(500);
    })
  },
  remove_contributor: function(req, res){
    knex('contributors')
    .where('id', req.body.id)
    .del()
    .then((results)=>{
      res.render('single_board',{contributors:results})
    })
    .catch((error)=>{
        console.log('error:', error);
        res.sendStatus(500);
    })
},

}
