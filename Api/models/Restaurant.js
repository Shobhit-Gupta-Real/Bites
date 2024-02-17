const mongoose = require('mongoose')
const { string } = require('zod')
const {Schema, model} = mongoose

const RestSchema = new Schema({
    image:{
        url: String,
        filename: String
    },
    rest: String,
    variety: String,
    address: String,
    contact: String,
    menu:[{
        type: mongoose.Schema.ObjectId,
        ref: 'Food_item'
    }],
    reviews:[{
        type: mongoose.Schema.ObjectId,
        ref: 'review'
    }]
})

const RestModel = model('restaurant', RestSchema)
module.exports = RestModel