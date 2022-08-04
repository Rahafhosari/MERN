const Users = require('../controllers/user.controllers');

const { authenticate } = require('../config/jwt.config');
module.exports = app => {
  app.post("/api/register", Users.register);
  app.post("/api/login", Users.login);
  app.get("/api/users",  Users.getAll);
  app.get("/api/get/:id", Users.findUser);
  app.get("/api/logout", Users.logout);
}