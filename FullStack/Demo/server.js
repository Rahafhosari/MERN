const express = require("express");
const cors = require('cors');
const app = express();

require("./server/config/mongoose.config"); // this is how the server reads mongoose from the mongoose config

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());

require('./server/routes/person.routes')(app);

app.listen(8000, () => console.log("Listening at Port 8000"));