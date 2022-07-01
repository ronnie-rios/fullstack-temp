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

router.post('/', upload.single("image"), (req, res) => {
    req.body.image = `/img/${req.file.filename}${path.extname(req.file.originalname)}`
    Example.create(req.body)
    .then(img => {
        res.json(img)
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = router