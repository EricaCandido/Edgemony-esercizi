const express=require('express')

const hbs=require('hbs')

const app=express()
const PORT=4000


app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req,res)=>{
    res.render('home',            
{pet:'cane', color: "viola", season:"inverno",
 titolo:'Homepage'}

) 
})

app.get('/about', (req,res)=>{
    res.render('about', {titolo:'About me'}) 
})

app.get('/login', (req,res)=>{
    res.render('login') 
})
app.post('/login', (req, res)=>{

    const {name, surname}=req.body
    if(name && surname){
        return res.status(200).render('login')
        
    }else{
        return res.status(400).send('Hai dimenticato di inserire un dato')
    }
})

app.get('/mi-presento', (req,res)=>{
    res.render('mi-presento') 
})

app.listen(PORT, ()=>{
    console.log(`Server attivo sulla ${PORT}`)
})