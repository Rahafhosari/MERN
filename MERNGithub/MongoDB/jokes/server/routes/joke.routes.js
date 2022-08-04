const JokeController = require("../controllers/joke.controller");

module.exports = app => {
  //return list of all jokes
  app.get("/api/jokes/", JokeController.findAllJokes);
  //return joke with specified id
  app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
  //return random joke
  app.get("/api/jokes/random", JokeController.findRandomJokes);
  //create a new joke
  app.post("/api/jokes/new", JokeController.createNewJoke);
  //update a joke with specified id
  app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
  //remove a joke with specified id
  app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
};