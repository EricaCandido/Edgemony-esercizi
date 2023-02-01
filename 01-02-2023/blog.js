const PORT=3001;
const os = require('os');
const http=require('http');

let utente=os.userInfo();
let data= new Date();

let articoli=`<!doctype html> <html> <head> </head> <body> L'utente ${utente.username} si trova nella sezione articoli alle ${data.getHours()}:${data.getMinutes()}</body></html> `
let commenti=`<!doctype html> <html> <head> </head> <body> L'utente si trova nella sezione commenti alle ${data.getHours()}:${data.getMinutes()}</body></html> `
let utenti=`<!doctype html> <html> <head> </head> <body> L'utente si trova nella sezione utenti alle ${data.getHours()}:${data.getMinutes()}</body></html> `


let server= http.createServer((req,res)=>{
    console.log(`Server connesso alla porta ${PORT}`);
    
    if (req.url==='/articoli')
    res.end(articoli)
else if (req.url==='/commenti')
    res.end(commenti)
else if (req.url==='/utenti')
    res.end(utenti)
else if (req.url==='/')
    
    res.end(`<!DOCTYPE html> 
    <html>
    <head>
    <title>
    Home page
    </title>
    </head>
    <body>
    <h1>Questa è l'homepage</h1>
    </body>
    </html>`)
else{
    res.writeHead(404)
    res.end('Page not found')
}


})



server.listen(PORT)