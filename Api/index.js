const express = require('express')
const app = express()
const mongoose = require('mongoose')
const foodModel = require('./models/Food_item')

app.get('/', (req,res)=>{
    res.send("done")
})

app.listen(4000, ()=>{
    console.log(`server 4000 is ready!`)
})