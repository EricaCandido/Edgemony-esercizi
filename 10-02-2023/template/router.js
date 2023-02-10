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

router.get('*', (req,res)=>{
    res.render(__dirname+ '/views/not_found.hbs', {titolo:'Pagina non trovata'})

})

module.exports= router