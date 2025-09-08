const express = require('express')
const router = express.Router()
const controller = require('./controller')

router.get('/', controller.getAll.bind(controller))

router.post('/', controller.add.bind(controller))

router.delete('/:id', controller.remove.bind(controller))

module.exports = router