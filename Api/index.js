const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const UserModel = require('./models/User')
const foodModel = require('./models/Food_item')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const jwt = require('jsonwebtoken')
const secret = 'asdfjkjlj3453' //secret code for jsonwebtoken


app.use(cors({credentials:true, origin:'http://localhost:5173'}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect('mongodb+srv://Bites:Ywnj6mZwmmP4ATkk@atlascluster.ulzw8dq.mongodb.net/?retryWrites=true&w=majority')

app.post('/signup', async(req,res)=>{
   const {username, password} = req.body
   try{
   const userDoc = await UserModel.create({
    username,
    password: bcrypt.hashSync(password, salt)
   })
   res.json(userDoc)
}catch(e){
    res.status(400).json(e)
}
})

app.post('/signin', async(req,res)=>{
    const {username, password} = req.body
    const userDoc = await UserModel.findOne({username})
    const passOk = bcrypt.compareSync(password, userDoc.password)
    if(passOk){
        jwt.sign({username, id:userDoc._id},
            secret,
            {},
            (err, token)=>{
            if(err) throw err;
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            })
        })
    }else{
        res.status(400).json('Wrong credentials')
    }
})
app.get('/profile', (req,res)=>{
    const {token} = req.cookies
    jwt.verify(token, secret, {}, (err, info)=>{
        if(err) throw err
        res.json(info)
    })
    res.json(req.cookies)
})

app.post('/logout',(req,res)=>{
    res.cookie('token','').json('ok')
})

app.listen(4000, ()=>{
    console.log(`server 4000 is ready!`)
})

//Ywnj6mZwmmP4ATkk
//mongodb+srv://Bites:Ywnj6mZwmmP4ATkk@atlascluster.ulzw8dq.mongodb.net/?retryWrites=true&w=majority