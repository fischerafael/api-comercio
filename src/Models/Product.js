const mongoose = require('mongoose')
const PointSchema = require('./Utils/PointSchema')

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    location: {
        type: PointSchema,
        index: '2dsphere',
    },
    order: {
        type: Number,
    }
})

module.exports = mongoose.model('Product', Schema)