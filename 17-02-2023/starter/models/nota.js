const mongoose = require('mongoose');


//creazione ogetto della classe Schema con il quale gestire i dati
var notaSchema = new mongoose.Schema({
    name: {
        type: String,
    },
     surname: {
        type: String,
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    address: {
        type: String
    },
    text: {
        type: String
    },
    age: {
        type: Number
    }
});



//dichiaro come modello (.modello) il notaSchema con il nome notaModel; questo nome verrà pluralizzato da Mongoose
mongoose.model('notaModel', notaSchema);