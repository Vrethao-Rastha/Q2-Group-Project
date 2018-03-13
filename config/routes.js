//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const users = require("../controllers/users.js");
const board_controller = require("../controllers/board_controller.js");
const column_controller = require("../controllers/column_controller.js")
const card_controller = require("../controllers/card_controller.js")


module.exports = function(app){
  // LOGIN AND AUTHENICATION PATHS
  app.get('/', index.get);

  app.get('/login', users.displaylogin);

  app.post('/login', users.login);

  app.get('/logout', users.logout);

  app.get('/register', users.displayregister);

  app.post('/register', users.register);
  //BOARD CREATION AND EDITING
  app.get('/boards', board_controller.boards);

  app.get('/single_board/contributors', board_controller.contributors);

  app.post('/create/board', board_controller.create_board);
  //COLUMN CREATION AND EDITING
  app.get('/columns', column_controller.columns);

  app.post('/create/column/', column_controller.create_column);

  app.post('edit/column/:id', column_controller.edit_column);

  app.post('delete/column/:id', column_controller.delete_column);

  //CARDS ROUTES

  app.get('/cards', card_controller.cards);

  app.post('/create/card', card_controller.create_card);

  app.post('/edit/card/:id', card_controller.edit_card);

  app.post('/delete/card/:id', card_controller.delete_card);


}
