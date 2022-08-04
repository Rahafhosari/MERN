const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser =require('cookie-parser');
const port = 8000;

require('./server/config/mongoose.config');

//Auth
require('dotenv').config();
// app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/userBook.routes')(app);

//Cookies
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

//Listening
app.listen(port, () => console.log(`Listening on port: ${port}`) );

// const jwt = require("jsonwebtoken");