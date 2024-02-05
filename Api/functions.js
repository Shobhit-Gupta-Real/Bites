const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const secret = 'asdfjkjlj3453' //secret code for jsonwebtoken
app.use(cookieParser())


module.exports.tokensign = (username, id, req, res)=>{
    jwt.sign({username, id:id}, secret, {}, (err, token)=>{
        if(err) throw err
        res.cookie('token', token).json({
            id: id,
            username
        })
    })
}