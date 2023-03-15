const mongoose = require('mongoose');


//creazione ogetto della classe Schema con il quale gestire i dati
let movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
     year: {
        type: Number,
    },
    seen: {
        type: String,
        default:"Sì"
    },
    tvSerie: {
        type: String
    },
    seasons: {
        type: String
    },
    info: {
        type: String
    }
});



//dichiaro come modello (.modello) il notaSchema con il nome notaModel; questo nome verrà pluralizzato da Mongoose
mongoose.model('movieModel', movieSchema);