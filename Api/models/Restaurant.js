const mongoose = require('mongoose')
const {Schema, model} = mongoose

const RestSchema = new Schema({
    image: String,
    rest: String,
    variety: String,
    address: String,
    contact: String,
})

const RestModel = model('restaurant', RestSchema)
module.exports = RestModel