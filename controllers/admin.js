const knex = require("../db/knex.js");

module.exports = {

  home_page: function(req, res){
    knex('boards')
    .then((results)=>{
      res.render('admin', {theBoards:results})
    })
  },

  delete_board: function(req, res) {
    knex('boards')
      .where('board_id', req.params.id)
        .del()
        .then(()=>{
          res.redirect('/admin_page')
        })
        .catch((error)=>{
          console.log(error);
          res.sendStatus(500);
        })
  }


}
