const express = require('express')
const router = express.Router()

const controller = require('../constrollers/index.controller')

router.get('/', controller.index)

router.get('/1000', controller.n1000)
router.get('/2000', controller.n2000)
router.get('/:id', controller.avisar)

module.exports = router
