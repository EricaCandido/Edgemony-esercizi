//comando per creare un database
use esercizio14_02_23
//risposta
'switched to db esercizio14_02_23'

// comando per creare una collezione dentro 'esercizio14_02_23'
db.createCollection('movies') 
//risposta
{ ok: 1 }


//comando per inserire degli oggetti dentro la collezione 'movies'
db.movies.insertMany( [{id:1, title: 'You', description: 'Un geniale libraio incontra un aspirante scrittrice, che presto diviene la sua ossessione. Usando i social media e Internet, l uomo cerca di avvicinarsi a lei, arrivando a rimuovere qualsiasi ostacolo si frapponga tra lui e lei.', category: ['Thriller psicologico', 'Crime TV genre'], year:2018},
{id:2, title: 'Machos alpha', description: 'Nel bel mezzo di una crisi di mezza età, quattro amici sentono che stanno perdendo i loro privilegi. Qualche anno fa sarebbero stati maschi alfa, ma sono stati spinti nell era dell uguaglianza. Ognuno cerca di adattarsi a modo suo.', category: ['commedy'], year:2022}
])
//risposta
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("63eb90b71de97cc239840667"),
    '1': ObjectId("63eb90b71de97cc239840668")
  }
}

//comando per trovare tutti gli oggetti dentro la collezione 'movies'
db.movies.find()
//risposta
{
  _id: ObjectId("63eb92d51de97cc239840669"),
  id: 1,
  title: 'You',
  description: 'Un geniale libraio incontra un aspirante scrittrice, che presto diviene la sua ossessione. Usando i social media e Internet, l uomo cerca di avvicinarsi a lei, arrivando a rimuovere qualsiasi ostacolo si frapponga tra lui e lei.',
  category: [
    'Thriller psicologico',
    'Crime TV genre'
  ],
  year: 2018
}
{
  _id: ObjectId("63eb92d51de97cc23984066a"),
  id: 2,
  title: 'Machos alpha',
  description: 'Nel bel mezzo di una crisi di mezza età, quattro amici sentono che stanno perdendo i loro privilegi. Qualche anno fa sarebbero stati maschi alfa, ma sono stati spinti nell era dell uguaglianza. Ognuno cerca di adattarsi a modo suo.',
  category: ['commedy'],
  year: 2022
}
//comando per modificare il valore della chiave 'year' dell'oggetto con id 1
db.movies.updateOne({id:1}, {$set:{year:2020}})
//risposta
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

//comando per visualizzare la modifica appena effettuata
db.movies.find({id:1}, {year:1})
//risposta
{
  _id: ObjectId("63eb92d51de97cc239840669"),
  year: 2020
}

//comando per inserire un nuovo record
db.movies.insertOne({title: 'The bold type', description:'Le peripezie di tre giovani amiche di New York che lavorano per Scarlet, una rivista femminile mentre si mettono alla prova in un mondo tanto affascinante quanto incerto e si trovano alle prese con i piccoli grandi problemi della vita.', 
category:['commedy'], year: 2017})
//risposta
{
    acknowledged: true,
    insertedId: ObjectId("63eb97d8ac65584ff72af361")
  }
//comando per visualizzare il nuovo record
db.movies.findOne({title:'The bold type'})
//risposta
{
  _id: ObjectId("63eb97d8ac65584ff72af361"),
  title: 'The bold type',
  description: 'Le peripezie di tre giovani amiche di New York che lavorano per Scarlet, una rivista femminile mentre si mettono alla prova in un mondo tanto affascinante quanto incerto e si trovano alle prese con i piccoli grandi problemi della vita.',
  category: [
    'commedy'
  ],
  year: 2017
}

//ho dimenticato di inserire l'id quindi cancello e rimando
db.movies.deleteOne({title:"The bold type"}) //cancello
//risposta
{
  acknowledged: true,
  deletedCount: 1
}
//controllo se ha cancellato
db.movies.find()//comando
//risposta
{
  _id: ObjectId("63eb92d51de97cc239840669"),
  id: 1,
  title: 'You',
  description: 'Un geniale libraio incontra un aspirante scrittrice, che presto diviene la sua ossessione. Usando i social media e Internet, l uomo cerca di avvicinarsi a lei, arrivando a rimuovere qualsiasi ostacolo si frapponga tra lui e lei.',
  category: [
    'Thriller psicologico',
    'Crime TV genre'
  ],
  year: 2020
}
{
  _id: ObjectId("63eb92d51de97cc23984066a"),
  id: 2,
  title: 'Machos alpha',
  description: 'Nel bel mezzo di una crisi di mezza età, quattro amici sentono che stanno perdendo i loro privilegi. Qualche anno fa sarebbero stati maschi alfa, ma sono stati spinti nell era dell uguaglianza. Ognuno cerca di adattarsi a modo suo.',
  category: 'commedy',
  year: 2022
}
//riaggiungo il record corretto
db.movies.insertOne({id:3,title: 'The bold type', description:'Le peripezie di tre giovani amiche di New York che lavorano per Scarlet, una rivista femminile mentre si mettono alla prova in un mondo tanto affascinante quanto incerto e si trovano alle prese con i piccoli grandi problemi della vita.', category:['commedy'], year: 2017})
//risposta
{
  acknowledged: true,
  insertedId: ObjectId("63eb994aac65584ff72af362")
}
//ricontrollo
db.movies.find()
//risposta
{
  _id: ObjectId("63eb92d51de97cc239840669"),
  id: 1,
  title: 'You',
  description: 'Un geniale libraio incontra un aspirante scrittrice, che presto diviene la sua ossessione. Usando i social media e Internet, l uomo cerca di avvicinarsi a lei, arrivando a rimuovere qualsiasi ostacolo si frapponga tra lui e lei.',
  category: [
    'Thriller psicologico',
    'Crime TV genre'
  ],
  year: 2020
}
{
  _id: ObjectId("63eb92d51de97cc23984066a"),
  id: 2,
  title: 'Machos alpha',
  description: 'Nel bel mezzo di una crisi di mezza età, quattro amici sentono che stanno perdendo i loro privilegi. Qualche anno fa sarebbero stati maschi alfa, ma sono stati spinti nell era dell uguaglianza. Ognuno cerca di adattarsi a modo suo.',
  category: 'commedy',
  year: 2022
}
{
  _id: ObjectId("63eb994aac65584ff72af362"),
  id: 3,
  title: 'The bold type',
  description: 'Le peripezie di tre giovani amiche di New York che lavorano per Scarlet, una rivista femminile mentre si mettono alla prova in un mondo tanto affascinante quanto incerto e si trovano alle prese con i piccoli grandi problemi della vita.',
  category: [
    'commedy'
  ],
  year: 2017
}

//ordino in ordine decrescente (senza un senso)

db.movies.find().sort({id:-1})
//risposta
{
  _id: ObjectId("63eb994aac65584ff72af362"),
  id: 3,
  title: 'The bold type',
  description: 'Le peripezie di tre giovani amiche di New York che lavorano per Scarlet, una rivista femminile mentre si mettono alla prova in un mondo tanto affascinante quanto incerto e si trovano alle prese con i piccoli grandi problemi della vita.',
  category: [
    'commedy'
  ],
  year: 2017
}
{
  _id: ObjectId("63eb92d51de97cc23984066a"),
  id: 2,
  title: 'Machos alpha',
  description: 'Nel bel mezzo di una crisi di mezza età, quattro amici sentono che stanno perdendo i loro privilegi. Qualche anno fa sarebbero stati maschi alfa, ma sono stati spinti nell era dell uguaglianza. Ognuno cerca di adattarsi a modo suo.',
  category: 'commedy',
  year: 2022
}
{
  _id: ObjectId("63eb92d51de97cc239840669"),
  id: 1,
  title: 'You',
  description: 'Un geniale libraio incontra un aspirante scrittrice, che presto diviene la sua ossessione. Usando i social media e Internet, l uomo cerca di avvicinarsi a lei, arrivando a rimuovere qualsiasi ostacolo si frapponga tra lui e lei.',
  category: [
    'Thriller psicologico',
    'Crime TV genre'
  ],
  year: 2020
}