const mongoose = require('mongoose');

mongoose.set('strictQuery', true); //richiesto per lavarare in strict code su ECMA script; controllo che i dati del db sono quelli che corrispondono allo schema

mongoose.connect(process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
    if (!err) {
        console.log('MongoDB connesso.')
    }
    else {
        console.log(`Problemi con la connessione:  ${err}`)
    }
});


require('./nota');
require('./movie');