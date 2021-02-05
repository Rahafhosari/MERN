const express = require("express");//importing express
var faker = require('faker'); //importing faker
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User {
    constructor(){
        this.id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
console.log(new User());

class Company {
    constructor(){
        this.id = faker.random.uuid();
        this.companyName = faker.company.companyName();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}
console.log(new Company());

//Returns an new user
app.get("/api/users/new", (req, res) => {
    res.json( new User() );
    console.log(req.body);
});



//Returns an new company
app.get("/api/companies/new", (req, res) => {
    res.json( new Company() );
});

//Returns a user & a company
app.get("/api/user/company", (req, res) => {
    // const user = req.params.User;
    // const company = req.params.Company;
    res.json([new User(), new Company()]);
});
console.log([new User(),new Company()]);


app.listen( port, () => console.log(`Listening on port: ${port}`) );
