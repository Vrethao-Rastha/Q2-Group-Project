//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const users = require("../controllers/users.js");
const board = require("../controllers/board_controller.js");
const column = require("../controllers/column_controller.js")
const card = require("../controllers/card_controller.js")

module.exports = function(app){

  app.get('/', index.get);

  app.get('/login', users.displaylogin);

  app.get('/logout', users.logout);

  app.post('/login', users.login);

  app.get('/register', users.displayregister);

  app.post('/register', users.register);

  app.use(authMiddleware);

  app.get('/boards', board.boards);

  app.get('/single_board/contributors', board.contributors);

  app.post('/create/board', board.create_board);
}

function authMiddleware(req, res, next){
  if(!req.session.user[0]){
    res.redirect('/login')
  }else{
    next();
  }
}
