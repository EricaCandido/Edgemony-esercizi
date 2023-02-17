const express = require('express');
let libroRouter = express.Router();
const mongoose = require('mongoose');
const Libro = mongoose.model('libroModel');


libroRouter.get('/', (req, res) => {
    res.render("aggiorna_libro", {
        viewTitle: "Inserisci un libro"
    });
});

libroRouter.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
    else
        updateRecord(req, res);
});

function insertRecord(req, res) {
    let libro = new Libro(); 
    libro.title = req.body.title;
    libro.author = req.body.author;
    libro.pages = req.body.pages;
    libro.price = req.body.price;

   
    libro.save((err, doc) => {
        if (!err)
            res.redirect('lista_libri');
            else
                console.log(`Errore nell' inserimento: ${err}`);
        })
    }; 


function updateRecord(req, res) {
    Libro.updateOne({ libro_id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) { res.redirect('lista_libri'); }
            else {
                console.log('Errore durante l\' update : ' + err);
        }
    });
}

libroRouter.get('/lista_libri', (req, res) => {
    Libro.find((err, docs) => {
        if (!err) {
            res.render("lista_libri", {
                listalibri: docs
            });
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});

libroRouter.get('/:libro_id', (req, res) => {
    Libro.findById(req.params._id, (err, doc) => {
        if (!err) {
            res.render("aggiorna_libro", {
                viewTitle: "Nuovo libro",
                listalibri: doc
            });
        }
    });
});

libroRouter.get('/delete/:libro_id', (req, res) => {
    Libro.findByIdAndRemove(req.params._id, (err, doc) => {
        if (!err) {
            res.redirect('/lista_libri');
        }
        else {
            console.log(`Errore ${err}`);
        }
    });
});

module.exports = libroRouter;