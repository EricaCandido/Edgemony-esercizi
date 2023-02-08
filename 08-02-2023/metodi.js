const express=require('express')
const app=express()

const articoli=require("./articoli")
const PORT=3000

app.use(express.static('./public'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

//semplice chiamata get che restituisce tutti i dati del json articoli (risposta salvata nel file 'res_get.json')
app.get('/articoli', (req,res)=>{
    res.status(200).json({success:true, data:articoli})
})

//creazione di un nuovo elemento e restituzione di quest'ultimo (risposta salvata nel file 'res_post_single_element.json')
app.post('/articoli', (req,res)=>{
    const {id, title, body, userId, tags, reactions }= req.body
    if (!id || !title){
        res.status(400).json({ success:false, msg:'Non hai inserito un dato'})
    }
    return res.status(200).json({success:true, data:{id:id, title:title, body:body, userId: userId, tags:tags, reactions:reactions}})
})

//creazione nuovo dato e restituzione di questo + i dati già esistenti (risposta salvata nel file 'res_post.json'))

app.post('/articoli/new', (req,res)=>{
    const {id, title, body, userId, tags, reactions }= req.body

    if(!id || !title || !body || !userId || !tags || !reactions){ 
        return res.status(400)
        .json({success:false, msg:'Non hai inserito un dato, ricontrolla'})
    }
        return res.status(201).json({success:true, data:[...articoli, {id:id, title:title, body:body, userId: userId, tags:tags, reactions:reactions}]})

})

//modifica di un elemento attraverso l'id come parametro (risposta salvata nel file 'res_put.json'; modifica effettuata sull'elemento con id 1))

app.put('/articoli/:id', (req,res)=>{
    const {id}=req.params
    const {title, body, userId, tags, reactions}=req.body

    const articolo= articoli.find((articolo)=>articolo.id===Number(id))

    if(!articolo){
        return res. status(400).json({ success:false, msg: `L'articolo con id ${id} non esiste`})

    }
    const newArticles=articoli.map((articolo)=>{
        if(articolo.id===Number(id)){
            articolo.title=title
            articolo.body=body
            articolo.userId=userId
            articolo.tags=tags
            articolo.reactions=reactions

           
        }
        return articolo
    })

    res.status(200).json({success:true, data: newArticles})
})

//rimozione di un elemento dall'oggetto e restituzione del nuovo oggetto (risposta salvata nel file 'res_delete.json'; rimosso l'elemento con id 1)

app.delete('/articoli/:id', (req,res)=>{
    
    const articolo=articoli.find((articolo)=>articolo.id===Number(req.params.id)) 

    if(!articolo){
        res.status(400).json({success:false, msg:'Questo articolo non esiste'})
    }

    const newArticles= articoli.filter((articolo)=>articolo.id !==Number(req.params.id))

    return res.status(200).json({success:true, data: newArticles})
})

//prova sulla route login
app.post('/login', (req,res)=>{
    const {name}=req.body
    if(name){
        return res.status(200).send(`Benvenuta ${name}`)
    }else{
        return res.status(400).send('Hai dimenticato di inserire il tuo nome nel body')
    }
})

app.listen(PORT, ()=>{
    console.log(`Server attivo sulla porta ${PORT}`)
})