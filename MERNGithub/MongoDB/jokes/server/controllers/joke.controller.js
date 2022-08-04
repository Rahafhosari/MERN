const Joke = require("../models/joke.model");

//Export a function to get all jokes
module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(alltheJokes => res.json({ message: "successful", jokes: alltheJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//Export a function to get a single joke
module.exports.findOneSingleJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
		.catch(err => res.json({ message: "Cannot find the Joke, Something went wrong", error: err }));
};

//Export a function to create a joke
module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Cannot create Joke, Something went wrong", error: err }));
};

//Export a function to update a joke
module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//Export a function to delete a joke
module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//Random Joke
// module.exports.findRandomJokes = (req, res) => {
//   var counter = Joke.countDocuments(); //db.collection.countDocuments
//   var randjoke = Math.floor(Math.random() * counter);
//   Joke.findOne().skip(randjoke).limit(10).exec() //{ random: req.params.random}
//     .then(randomJokes => res.json({ joke: randomJokes }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };


// Joke.find().limit(-1).skip(yourRandomNumber).next()

// module.exports.findRandom = (req, res) => {
//   Joke.count().exec(function (err, count) {
//   var random = Math.flooe(Math.random() * count);
//   Joke.findOne().skip(random).exec()
//     .then(randomJokes => res.json({ joke: randomJokes }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
//   )
// })
// }

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }

// module.exports.findJokeRandomly = (req, res) => {
//   Joke.countDocuments({})
//       .then((count) => {
//           Joke.findOne({}).skip(getRandomIntInclusive(0, count - 1))
//               .then(joke => res.json({joke: joke}))
//       })
//       .catch(err => res.json({message: "Couldn't fetch a random joke for you , Try Againss", error: err}));
// };