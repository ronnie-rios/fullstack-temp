const express = require('express')
const  mongoose = require('mongoose')
const multer = require('multer')
const app = express()
const port = 5555

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const upload =  multer.diskStorage({
    destination: function(req, file, cb) {
        cb('null', 'tmp/my-uploads')
    },
    filename: function(req, file, cb) {
        const uniqueName = Date.now() + '-' + Math.round(Math.random() + 123)
        cb(null, file.fieldname+ '-' + uniqueName)
    }
})


mongoose.connect('mongodb://localhost/exampledb')

const exampleController = require('./controllers/exampleController')
app.use('/example', exampleController)

app.listen(port, () => console.log(`server running on ${port}`))