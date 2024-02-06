const mongoose = require('mongoose')
const {model, Schema} = mongoose

const FoodSchema = new Schema({
    name: String,
    image:{
        url: String,
        filename: String
    },
    description: String,
    price: Number,
    restaurant: {
        type: mongoose.Schema.ObjectId,
        ref: 'restaurant'
    }
})
const FoodModel = model('Food_item', FoodSchema)
module.exports = FoodModel;