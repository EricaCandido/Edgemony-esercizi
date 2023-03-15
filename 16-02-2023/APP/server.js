require('./models/DBconfig');
require('dotenv').config() //PER UTILIZZARE L'.ENV
const express = require('express');
const hbs = require('hbs');
const bodyparser = require('body-parser');
const routes = require('./controllers/routes');

const movie_routes = require('./controllers/movie_router');


let app = express();
const PORT = 3000

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static('./public'))


app.use(bodyparser.urlencoded({
    extended: true
}));
app.use('/', routes);
app.use('/movie', movie_routes);


app.listen(PORT, () => {
    console.log(`Server  ascolta sulla porta ${3000}`);
});

