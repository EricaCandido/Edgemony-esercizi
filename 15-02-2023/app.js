const MongoClient=require('mongodb').MongoClient
let url="mongodb+srv://erica1997:Ericamongodb1997@mycluster.6yujntw.mongodb.net/school?retryWrites=true"

// // connessione al database
// MongoClient.connect(url)
// .then((db)=>{
//     accountDb=db
//     collection=accountDb.db('school')
//     console.log('database connesso')
//     })
//     .catch((err)=>{
//         console.log(err)
// })

// //creare una nuova collezione 'students' dentro 'school'
// MongoClient.connect(url, (err,db)=>{
//     if(err) throw err
//     let dbase=db.db('school')
//     dbase.createCollection('students', (err,res)=>{

//         if(err) throw err
//         console.log('collezione creata')
//         db.close()
//     })
// })

// //creare una nuova collezione 'courses' dentro 'school'
// MongoClient.connect(url, (err,db)=>{
//     if(err) throw err
//     let dbase=db.db('school')
//     dbase.createCollection('courses', (err,res)=>{

//         if(err) throw err
//         console.log('collezione creata')
//         db.close()
//     })
// })

//creazione records in students
// MongoClient.connect(url, (err,db)=>{
//     if(err) throw err;
//     let dbase=db.db("school");
//      let myObj=[{ name:"Erica", cognome:"Candido", matricola:0001, corso: "Informatica per le discipline umanistiche", esami:["Banche dati", "Intelligenza artificiale", "Linguistica computazionale", "Sociologia digitale"]},
//      { name:"Mario", cognome:"Rossi", matricola:0002, corso: "Informatica per le discipline umanistiche", esami:["Analisi dei dati", "Intelligenza artificiale", "Corpus linguistics", "Sociologia digitale"]},
//      { name:"Greta", cognome:"Cappello", matricola:0003, corso: "Informatica per le discipline umanistiche", esami:["Codifica di testi", "Epistemologia delle macchine", "Corpus linguistics", "Database"]},
//      { name:"Giovanni", cognome:"Pascoli", matricola:1000, corso: "Lingue e letterature moderne", esami:["lingua inglese", "lingua spagnola", "lingua tedesca", "lingua francese"]},
//      { name:"Giovanni", cognome:"Verga", matricola:1001, corso: "Lingue e letterature moderne", esami:["letteratura inglese", "letteratura spagnola", "letteratura tedesca", "letteratura francese"]},
//      { name:"Cristina", cognome:"Rossetti", matricola:1002, corso: "Lingue e letterature moderne", esami:["pragmatica", "linguistica", "psicologia del linguaggio", "letteratura inglese"]}
// ]
//     dbase.collection('students').insertMany(myObj, (err,res)=>{
//         if(err) throw err;
//         console.log(`Numero di record inseriti ${res.insertedCount}`)
//         db.close()
//     })
// })

//creazione records in courses
// MongoClient.connect(url, (err,db)=>{
//     if(err) throw err;
//     let dbase=db.db("school");
//      let myObj=[
//      {corso: "Informatica per le discipline umanistiche", materia: "Linguistica computazionale", docenti:["Simone Faro", "Lorenzo Di Silvestro"]},
//      { corso: "Informatica per le discipline umanistiche", materia: "Intelligenza artificiale", docenti:["Daniela Giordano", "Antonio Di Silvestro"]},
//      { corso: "Informatica per le discipline umanistiche", materia: "Banche dati", docenti:["Salvatore Arcidiacono", "Mario Pagano"]},
//      {corso: "Lingue e letterature straniere moderne", materia: "Linguistica generale", docenti:["Michela Canepari", "Giorgia Viola"]},
//      { corso: "Lingue e letterature straniere moderne", materia: "Letteratura spagnola", docenti:["Rossella Liuzzo", "María Valero Joaquín"]},
//      { corso: "Lingue e letterature straniere moderne", materia: "Pragmatica della lingua", docenti:["Elisa Azzaro", "Luigi Ingaliso"]},
// ]
//     dbase.collection('courses').insertMany(myObj, (err,res)=>{
//         if(err) throw err;
//         console.log(`Numero di record inseriti ${res.insertedCount}`)
//         db.close()
//     })
// })

//aggiungiamo un solo record in students
// MongoClient.connect(url, (err,db)=>{
//     if(err) throw err;
//     let dbase=db.db("school");
//      let myObj={ name:"Giovanna", cognome:"Alfano", matricola:0004, corso: "Informatica per le discipline umanistiche", esami:["Corpus linguistics", "Reputazione aziendale", "Linguistica computazionale", "Inglese"]}
//     dbase.collection('students').insertOne(myObj, (err,res)=>{
//         if(err) throw err;
//         console.log(`Record inserito`)
//         db.close()
//     })
// })


//restituire in console il primo record di students
// MongoClient.connect(url, (err,db)=>{
//     if(err) throw err;
//     let dbase=db.db("school");
    
//     dbase.collection('students').findOne({}, (err,res)=>{
//         if(err) throw err;
//         console.log(res)
//         db.close()
//     })
// })
//Risposta al comando sopra
// {
//     _id: new ObjectId("63eced13e21260015387b439"),
//     name: 'Erica',
//     cognome: 'Candido',
//     matricola: 1,
//     corso: 'Informatica per le discipline umanistiche',
//     esami: [
//       'Banche dati',
//       'Intelligenza artificiale',
//       'Linguistica computazionale',
//       'Sociologia digitale'
//     ]
//   }

//restituire in console tutti i record di students
// MongoClient.connect(url, (err,db)=>{
//     if(err) throw err;
//     let dbase=db.db("school");
    
//     dbase.collection('students').find({}).toArray(function (err,res) {
//         if(err) throw err;
//         console.log(res)
//         db.close();
//     })
// })
// //risposta al comando sopra
// [
//     {
//       _id: new ObjectId("63eced13e21260015387b439"),     
//       name: 'Erica',
//       cognome: 'Candido',
//       matricola: 1,
//       corso: 'Informatica per le discipline umanistiche',
//       esami: [
//         'Banche dati',
//         'Intelligenza artificiale',
//         'Linguistica computazionale',
//         'Sociologia digitale'
//       ]
//     },
//     {
//       _id: new ObjectId("63eced13e21260015387b43a"),
//       name: 'Mario',
//       cognome: 'Rossi',
//       matricola: 2,
//       corso: 'Informatica per le discipline umanistiche',
//       esami: [
//         'Analisi dei dati',
//         'Intelligenza artificiale',
//         'Corpus linguistics',
//         'Sociologia digitale'
//       ]
//     },
//     {
//       _id: new ObjectId("63eced13e21260015387b43b"),
//       name: 'Greta',
//       cognome: 'Cappello',
//       matricola: 3,
//       corso: 'Informatica per le discipline umanistiche',
//       esami: [
//         'Codifica di testi',
//         'Epistemologia delle macchine',
//         'Corpus linguistics',
//         'Database'
//       ]
//     },
//     {
//       _id: new ObjectId("63eced13e21260015387b43c"),
//       name: 'Giovanni',
//       cognome: 'Pascoli',
//       matricola: 1000,
//       corso: 'Lingue e letterature moderne',
//       esami: [
//         'lingua inglese',
//         'lingua spagnola',
//         'lingua tedesca',
//         'lingua francese'
//       ]
//     },
//     {
//       _id: new ObjectId("63eced13e21260015387b43d"),
//       name: 'Giovanni',
//       cognome: 'Verga',
//       matricola: 1001,
//       corso: 'Lingue e letterature moderne',
//       esami: [
//         'letteratura inglese',
//         'letteratura spagnola',
//         'letteratura tedesca',
//         'letteratura francese'
//       ]
//     },
//     {
//       _id: new ObjectId("63eced13e21260015387b43e"),
//       name: 'Cristina',
//       cognome: 'Rossetti',
//       matricola: 1002,
//       corso: 'Lingue e letterature moderne',
//       esami: [
//         'pragmatica',
//         'linguistica',
//         'psicologia del linguaggio',
//         'letteratura inglese'
//       ]
//     },
//     {
//       _id: new ObjectId("63ecf0fa04b955177ee4e0d4"),
//       name: 'Giovanna',
//       cognome: 'Alfano',
//       matricola: 4,
//       corso: 'Informatica per le discipline umanistiche',
//       esami: [
//         'Corpus linguistics',
//         'Reputazione aziendale',
//         'Linguistica computazionale',
//         'Inglese'
//       ]
//     }
//   ]

//restituire in console un record filtrata da una query (matricola:1)
// MongoClient.connect(url, (err,db)=>{
//         if(err) throw err;
//         let dbase=db.db("school");
//         let query={matricola:1}
        
//         dbase.collection('students').find(query).toArray(function (err,res) {
//             if(err) throw err;
//             console.log(res)
//             db.close();
//         })
//     })
//risultato al comando sopra
// [
//     {
//       _id: new ObjectId("63eced13e21260015387b439"),     
//       name: 'Erica',
//       cognome: 'Candido',
//       matricola: 1,
//       corso: 'Informatica per le discipline umanistiche',
//       esami: [
//         'Banche dati',
//         'Intelligenza artificiale',
//         'Linguistica computazionale',
//         'Sociologia digitale'
//       ]
//     }
//   ]

//modificare un dato di un record 
// MongoClient.connect(url, (err,db)=>{
//     if(err) throw err;
//     let dbase=db.db("school");
//     let query={name:'Giovanna'};
//     let newValue={$set: {cognome:'Alfieri'}}
    
//     dbase.collection('students').updateOne(query , newValue, function (err, obj) {
//         if(err) throw err;
//         console.log(`Record aggiornato`)
//         db.close();
//     })
// })


//cancellare il record (o i record, se ne esistono) che rispondono alla query
// MongoClient.connect(url, (err,db)=>{
//     if(err) throw err;
//     let dbase=db.db("school");
//     let query={name:'Cristina'}
    
//     dbase.collection('students').deleteMany(query , function (err, obj) {
//         if(err) throw err;
//         console.log(`Record cancellat@`)
//         db.close();
//     })
// })