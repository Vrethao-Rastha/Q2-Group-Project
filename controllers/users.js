const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  displaylogin: function(req, res) {
    res.render('login');
  },

  login: function(req, res) {
    let loginEmail = req.body.email;
    let loginUsername = req.body.user_name;
    let loginPassword = req.body.password;

    knex('users').where('email', req.body.email)
      .then((results) => {
        if (!results[0]) {
          res.redirect('/login');
        }
        if (results[0].password == req.body.password) {
          req.session.user.push(results[0]);
          req.session.save(() => {
            res.redirect('/board_list')
          });

        } else {
          res.redirect('/login');
        }
      })


  },

  displayregister: function(req, res) {
    res.render('register');
  },

  register: function(req, res) {
    knex('users').insert({
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect('/login')
      })
  },

  logout: function(req, res) {
    req.session.user = []
    res.redirect('/login');

  },
}
