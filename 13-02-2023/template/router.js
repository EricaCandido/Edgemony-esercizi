const express=require('express')


const router=express.Router()

router.use(express.static('./public'))


router.get('/', (req,res)=>{
    res.render(__dirname+ '/views/index.hbs', {titolo:'Home'})
})

router.get('/contatti', (req,res)=>{
    res.render(__dirname+ '/views/contatti.hbs', {titolo:'Contatti'})
})

router.get('/formazione', (req,res)=>{
    res.render(__dirname+ '/views/formazione.hbs', {titolo:'Formazione'})
})

router.get('/about', (req,res)=>{
    res.render(__dirname+ '/views/about.hbs', {titolo:'About'})
})

router.get('/web-design', (req,res)=>{
    res.render(__dirname+ '/views/web-design.hbs', {titolo:'Web design'})
})

router.get('/log-in', (req,res)=>{
    res.render(__dirname+ '/views/log-in.hbs', {titolo:'Login'})
})

function checkPage(req,res,next){
    if(req.session.user){
        next()
    }else{
        res.redirect('/warning')
    }
}

router.get('/private', checkPage, (req,res)=>{
    res.render(__dirname+ '/views/private.hbs', {titolo:'Private'})
})

router.get('/warning', (req,res)=>{
    res.render(__dirname+ '/views/warning.hbs', {titolo:'Warning'})
})

router.get('/log-out', (req,res)=>{
    res.render(__dirname+ '/views/index.hbs')
})

router.get('*', (req,res)=>{
    res.render(__dirname+ '/views/not_found.hbs', {titolo:'Pagina non trovata'})

})

module.exports= router