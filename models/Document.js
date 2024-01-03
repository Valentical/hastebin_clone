const mongoose = require('mongoose')
const shortid = require('shortid')

const documentScheme = new mongoose.Schema({
    value: {
        type: String,
        required: true
    },
    _id: {
        type: String,
        default: shortid.generate
    },
})

module.exports = mongoose.model("Document", documentScheme)