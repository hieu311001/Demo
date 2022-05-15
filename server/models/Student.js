const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Student = new Schema({
    msv: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
    },
    address: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Student', Student)