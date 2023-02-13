const express=require('express')
const router=require('./router')
const hbs=require('hbs')
const session=require('cookie-session')
const bodyParser=require('body-parser')

const PORT=4040

const app=express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

app.use(session({secret:'la mia sessione'}))
app.use(bodyParser.urlencoded({extended:true}))


app.use( '/', router)


app.get('/log-out',(req,res)=>
{req.session=null
    res.render('index')
})

app.post('/log-in', (req,res)=>{
        if(!req.body.userName || !req.body.password) {

    res.status(400)
    res.render('log-in', {message:'Attenzione: mancano dei dati'})}
    else{
    let userName='Erica'
    let password='password'
    let userAuth={userName:userName, password:password}
    if (userName==req.body.userName && password==req.body.password)
        {req.session.user=userAuth
        res.redirect('/private')
    }else{
        res.redirect('/warning')
    }
    }
})

app.listen(PORT, ()=>{
    console.log(`Server attivo sulla porta ${PORT}`)
})