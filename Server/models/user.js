const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        min: 3,
        required: true
    },
    MobileNo:{
        type: String,
        min: 10,
        unique: true,
        required: true
    },
    Email: {
        type: String,
        unique: true,
        required: true,
        max: 50,
    },
    Password: {
        type: String,
        required: true,
        max: 25,
    },
    SavedEvents: {
        type: Array,
        default: [],
    },

},{timestamps: true})

const User = mongoose.model("User",userSchema)
module.exports = User