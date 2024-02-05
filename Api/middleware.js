const jwt = require('jsonwebtoken')
const secret = 'asdfjkjlj3453' //secret code for jsonwebtoken

module.exports.tokencheck = (req,res,next)=>{
    const {token} = req.cookies
    jwt.verify(token, secret, {}, (err, info)=>{
        if(err) throw err
        next()
    })
}

