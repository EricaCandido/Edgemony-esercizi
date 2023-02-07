const express=require('express')
const app=express()
const {users}=require('./users')

const PORT=3000

app.use(express.static('./public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get('/', (req,res)=>{
    res.send('Homepage')
})
app.get('/api/users', (req,res)=>{
     res.status(200).json({success:true, data:users})
})

app.post('/api/users', (req,res)=>{
    
    const {id, name, username, email, address, phone, website, company}=req.body
    if(!id || !name || !username || !email || !address || !phone || !website || !company){
        return res.status(400)
        .json({success:false, msg: 'Dati mancanti, ricontrollare'})
    }
        return res
        .status(200)
        .json({success:true, user: {id:id, name:name, username:username, email:email, address:address, phone:phone, website:website, company:company}})
})

app.listen(PORT, ()=>{console.log(`server attivo sulla porta ${PORT}`)})