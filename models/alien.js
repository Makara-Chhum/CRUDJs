const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    tech: {
        type: String,
        require: true
    },

    sub: {
        type: Boolean,
        required: false,
        default: false
    },
})

module.exports = mongoose.model('Alien',alienSchema)    