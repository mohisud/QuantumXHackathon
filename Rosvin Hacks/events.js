const mongoose = require('mongoose')

const eventSchema = new  mongoose.Schema({
    name:String,
    email:String,
    details:String
})

module.exports = mongoose.model('Event',eventSchema)