const express = require('express')
const router = express.Router()
const Example = require('../models/Example')

router.get('/', (req, res) =>{
    Example.find()
    .then(examples =>
        res.status(200))
    .then(json(examples))
    .catch(err => req.json(err))
})

module.exports = router