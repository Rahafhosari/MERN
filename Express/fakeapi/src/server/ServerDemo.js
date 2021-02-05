const express = require("express");//importing express
const app = express();
const port = 8000;
const faker = require("faker"); //importing faker
//
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const users = [
    { firstName: "Rahaf",  lastName: "Hosari"    },
    { firstName: "Jeries", lastName: "Hosari"   },
    { firstName: "Lamis",  lastName: "HH"    },
    { firstName: "Abdo", lastName: "the cat" }
];

//GET request for the api route
app.get("/api", (req, res) => {
    res.json({ message: "Hello World Lamis, another snippet of code" });
});

app.get("/api/users", (req, res) => {
    res.json( users );
});

//Get user by id
app.get("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params.id);
    // assuming this id is the index of the users array we could return one user this way
    res.json( users[req.params.id] );
});

//POST Data
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json( { status: "ok" } );
});

//UPDATE Data
app.put("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    // we always need to respond with something
    res.json( { status: "ok" } );
});

//DELETE Data
app.delete("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json( { status: "ok" } );
});
app.listen( port, () => console.log(`Listening on port: ${port}`) );

// req -> request
// res -> response

