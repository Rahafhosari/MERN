const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config');
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/routes/userBook.routes')(app);

//Auth
require('dotenv').config();
const jwt = require("jsonwebtoken");
//Cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`) );