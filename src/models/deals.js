const { Double } = require('mongodb')
const mongoose = require('mongoose')

const dealsSchema = new mongoose.Schema({
    _id: {
        type: mongoose.ObjectId,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    },
    totalPrice: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("insertdeals", dealsSchema)   