const authorize=(req, res, next)=>{
    const {user}=req.query
    
    if(user==='erica'){
        req.user={name:'erica'}
        next()
    }else{
        res.status(401).send(`Caro ${user}, non sei autorizzato`)
    }
    
    }
    
    module.exports=authorize