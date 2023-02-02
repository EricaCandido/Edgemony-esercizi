const http=require('http')
const url=require('url')
const fs=require('fs')
const lista=require('./lista')


let server=http.createServer((req, res)=>{
    let page=url.parse(req.url).pathname;

    if (page==='/')
    {res.writeHead(200, {'Content-Type':'text/html'})
    let homePage=fs.readFileSync("homepage.html")
    res.end(homePage)
}else if(page==='/chi-sono')
{res.writeHead(200, {'Content-Type':'text/html'})
let chiSono=fs.readFileSync("chi-sono.html")
res.end(chiSono)
} else if (page==='/API')
{res.writeHead(200, {'Content-Type':'application/json'})
res.end(JSON.stringify(lista))}
 else{
    res.writeHead(404);
    res.end('Not found')
}



}).listen(5000)