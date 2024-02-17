const mongoose = require('mongoose')
const {model, Schema} = mongoose


const reviewSchema = new Schema({
    rating: Number,
    review:String,
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'user'
    }
})

const ReviewModel = model('review', reviewSchema)
module.exports = ReviewModel