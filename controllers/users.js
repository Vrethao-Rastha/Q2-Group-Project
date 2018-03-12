const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  displaylogin: function(req, res) {
    res.render('login');
  },

  login: function(req, res) {

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
}
