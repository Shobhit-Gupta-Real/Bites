const mongoose = require('mongoose')
const {Schema, model} = mongoose

const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    cover: {
        url: String,
        filename: String
    },
    favourites:{
        food: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Food_item'
        }],
        restaurant: [{
        type: mongoose.Schema.ObjectId,
        ref: 'restaurant'
        }]
    }
})

const UserModel = model('user',UserSchema)
module.exports = UserModel