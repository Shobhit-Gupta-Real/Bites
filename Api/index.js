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
const multer = require('multer')
const {storage} = require('./cloudinary/index')
const upload = multer({storage})
const fs = require('fs')
const {isAbsolute} = require('path')
const RestModel = require('./models/Restaurant')
require('dotenv').config()
const {tokencheck} = require('./middleware')
const {tokensign} = require('./functions')
const {userValid} = require('./validation')

app.use('/uploads', express.static(__dirname+'/uploads'))
app.use(cors({credentials:true, origin:'http://localhost:5173'}))
app.use(express.json())
app.use(cookieParser())

mongoose.connect('mongodb+srv://Bites:Ywnj6mZwmmP4ATkk@atlascluster.ulzw8dq.mongodb.net/?retryWrites=true&w=majority')

app.post('/update/:id', tokencheck, async(req,res)=>{
    const {username} = req.body
    const {id} = req.params
    // const uploadimg = req.file
    // const image = {url: uploadimg.path, filename: uploadimg.filename} 
        const postDoc = await UserModel.findByIdAndUpdate({_id: id}, {
            username,
            // cover: image
        },
        {new: true})
    req.cookies.token = ""
    tokensign(username, id, req, res);
})

app.get('/rest/:id', async(req,res)=>{
    const {id} = req.params
    const restDoc = await RestModel.findById(id)
    res.json(restDoc)
})
app.post('/signup', upload.single('file'), async(req,res)=>{
  const {username, password} = req.body
  const uploadimg = req.file
  const image = {url: uploadimg.path, filename: uploadimg.filename}
   try{
   const userDoc = await UserModel.create({
    username,
    password: bcrypt.hashSync(password, salt),
    cover: image
   })
   tokensign(username, userDoc._id, req, res);
}catch(e){
    res.status(400).json(e)
}
})

app.post('/signin', userValid ,async(req,res)=>{
    const {username, password} = req.body
    const userDoc = await UserModel.findOne({username})
    const passOk = bcrypt.compareSync(password, userDoc.password)
    if(passOk){
        tokensign(username, userDoc._id, req, res);
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
app.get('/rest', async (req,res) =>{
    const postDoc = await RestModel.find()
    res.json(postDoc)
})


app.post('/logout',(req,res)=>{
    res.cookie('token','').json('ok')
})

app.post('/addrestu', upload.single('image'), async(req,res)=>{ //here the file is used as there in the Restadd file we have given the dp[0] to file index
    const {originalname, path} = req.file
    const parts = originalname.split('.')
    const ext = parts[parts.length -1]
    fs.renameSync(path, path+'.'+ext)

   const {rest, variety, address, contact} = req.body
   try{
   const restDoc = await RestModel.create({
    rest,
    variety,
    address, 
    contact,
    image: path+'.'+ext
   })
   res.json(restDoc)
}catch(e){
    res.status(400).json(e)
}
})


app.get('/:id', async(req,res)=>{
    const {id} = req.params
    const postDoc = await UserModel.findById(id)
    res.json(postDoc)
})

app.use((error, req, res, next)=>{
    res.status(500).send('An error has occurred.')
})

app.listen(4000, ()=>{
    console.log(`server 4000 is ready!`)
})

//Ywnj6mZwmmP4ATkk
//mongodb+srv://Bites:Ywnj6mZwmmP4ATkk@atlascluster.ulzw8dq.mongodb.net/?retryWrites=true&w=majority