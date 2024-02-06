const cloudinary = require('cloudinary').v2
const {CloudinaryStorage} = require('multer-storage-cloudinary')
require('dotenv').config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_CLOUD_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
})

module.exports.userStorage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder: 'UserProfile',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
})

module.exports.foodItemStorage = new CloudinaryStorage({
    cloudinary,
    params:{
        folder: 'FoodItems',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
})
module.exports.cloudinary