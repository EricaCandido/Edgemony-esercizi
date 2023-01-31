const http = require('http')
const os = require('os')
const fs=require('fs')
const homePage=fs.readFileSync('index.html')
const products=fs.readFileSync('products.html')
const client=fs.readFileSync('client.html')



let utente = os.userInfo();
let piattaforma  = os.platform();
let data = new Date();
let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
</body>
</html>`;
const server = http.createServer((req, res) => {
    if(req.url === '/')
        res.end(messaggio)
    else if (req.url==='/homepage')
        res.end(homePage)
    else if (req.url==='/products')
        res.end(products)
    else if (req.url==='/client')
        res.end(client) 
})
server.listen(3001)
