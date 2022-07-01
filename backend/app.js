const express = require('express')
const  mongoose = require('mongoose')
const app = express()
const port = 5555

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/exampledb')

const exampleController = require('./controllers/exampleController')
app.use('/example', exampleController)

app.listen(port, () => console.log(`server running on ${port}`))