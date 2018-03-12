//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const users = require("../controllers/users.js");


module.exports = function(app){

  app.get('/', index.get);

  app.get('/login', users.displaylogin);

  app.post('/login', users.login);

  app.get('/register', users.displayregister)

  app.post('/register', users.register);

}
