const mongoose = require('mongoose')
const {model, Schema} = mongoose

const foodSchema = new Schema({
    name: String,
    cover: String,
    description: String,
    price: Number
})
const foodModel = model('Food_item', foodSchema)
module.exports = foodModel;