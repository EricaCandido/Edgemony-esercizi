const http = require("http");
const server = http.createServer((req, res) => {
  
  if (req.url === "/homepage")
  res.end("Pagina iniziale")

  else if(req.url==='/studenti')
  res.end('Sezione studenti')

  else if(req.url==='/corsi')
  res.end('Sezione corsi')
  
  else {
    res.writeHead(404)
    res.end('pagina non trovata')
  }

});
server.listen(3000);


//Indica quali sono i percorsi che scriverai nella barra di ricerca del browser per raggiungere le tue pagine:

//1. Pagina iniziale: http://localhost:3000/homepage
//2. Sezione studenti: http://localhost:3000/studenti
//3. Sezione corsi: http://localhost:3000/corsi