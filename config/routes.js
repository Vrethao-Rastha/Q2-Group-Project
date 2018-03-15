//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");
const users = require("../controllers/users.js");
const board_controller = require("../controllers/board_controller.js");
const column_controller = require("../controllers/column_controller.js")
const card_controller = require("../controllers/card_controller.js")
const admin = require("../controllers/admin.js")

module.exports = function(app) {
  // LOGIN AND AUTHENICATION PATHS
  app.get('/', index.get);

  app.get('/login', users.displaylogin);

  app.post('/login', users.login);

  app.get('/logout', users.logout);

  app.get('/register', users.displayregister);

  app.post('/register', users.register);

  //Non user page blocking middleware
  app.use(authMiddleware);

  //BOARD CREATION AND EDITING
  app.get('/board_list', board_controller.boards);

  app.get('/board/:board_id', board_controller.single_board);

  app.get('/board/:id/contributors', board_controller.contributors);

  app.post('/create/board', board_controller.create_board);

  //COLUMN CREATION AND EDITING
  app.get('/columns', column_controller.columns);

  app.post('/create/column/', column_controller.create_column);

  app.post('edit/column/:id', column_controller.edit_column);

  app.post('delete/column/:id', column_controller.delete_column);

  //CARDS ROUTES

  app.get('/cards', card_controller.cards);

  app.post('/create/column/:parent_column_id/card', card_controller.create_card);

  app.post('/edit/card/:id', card_controller.edit_card);

  app.post('/delete/card/:id', card_controller.delete_card);

  //ADMIN ROUTES
  app.get('/admin', admin.home_page)

  app.post('/delete/board/:id', admin.delete_board )

}

function authMiddleware(req, res, next) {
  if (!req.session.user[0]) {
    res.redirect('/login')
  } else {
    next();
  }
}
