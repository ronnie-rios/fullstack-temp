const mongoose = require('mongoose')
 
const ExampleSchema = new mongoose.Schema({
    name: String,
    body: String,
    image: String
}, { timestamps: true })

const Example = mongoose.model('Example', ExampleSchema)