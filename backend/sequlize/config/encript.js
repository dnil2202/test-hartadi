const jwt = require('jsonwebtoken')

module.exports={
    createToken :(payload,expiresIn='24h')=>{
        return jwt.sign(payload, 'sosmed',{
            expiresIn
        })
        
    },

    readToken :(req,res,next)=>{
        jwt.verify(req.token,'sosmed',(err,decode)=>{
            if(err){
                return res.status(401).send({
                    message:'Authenticate error'
                })
            }
            console.log('Translate token', decode);
            req.dataToken = decode
            next()
        })
    }
}