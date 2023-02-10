const express=require('express')
const router=require('./router')
const hbs=require('hbs')

const PORT=4040

const app=express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')


app.use( '/', router)

app.listen(PORT, ()=>{
    console.log(`Server attivo sulla porta ${PORT}`)
})