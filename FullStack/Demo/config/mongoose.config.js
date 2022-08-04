const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/name_of_your_DB', {
        //to get rid of Deprecation warnings
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));