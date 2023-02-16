const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const Movie = mongoose.model('movieModel');


router.get('/', (req, res) => {
    res.render("update_movie", {
        viewTitle: "Inserisci un film"
    });
});

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});

function insertRecord(req, res) {
    let movie = new Movie(); 
    movie.title = req.body.title;
    movie.year = req.body.year;
    movie.seen = req.body.seen;
    movie.tvSerie = req.body.tvSerie;
    movie.seasons = req.body.seasons;
    movie.info = req.body.info;
   
    movie.save((err, doc) => {
        if (!err)
            res.redirect('movie_list');
            else
                console.log(`Errore nell' inserimento: ${err}`);
        })
    }; 


function updateRecord(req, res) {
    Movie.updateOne({ movie_id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('movie_list'); }
            else {
                console.log('Errore durante l\' update : ' + err);
        }
    });
}

router.get('/movie_list', (req, res) => {
    Movie.find((err, docs) => {
        if (!err) {
            res.render("movie_list", {
                movielist: docs
            });
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});

router.get('/:movie_id', (req, res) => {
    Movie.findById(req.params._id, (err, doc) => {
        if (!err) {
            res.render("update_movie", {
                viewTitle: "Nuovo film",
                movielist: doc
            });
        }
    });
});

router.get('/delete/:movie_id', (req, res) => {
    Movie.findByIdAndRemove(req.params._id, (err, doc) => {
        if (!err) {
            res.redirect('/movie_list');
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});

module.exports = router;