var express = require('express')
var router = express.Router()

// Controllers
var aboutsController = require('../controllers/aboutsController')
var contactsController = require('../controllers/contactsController')
var discoversController = require('../controllers/discoversController')
var homesController = require('../controllers/homesController')
var hairsController = require('../controllers/hairsController')
var servicesController = require('../controllers/servicesController')
var stylesController = require('../controllers/stylesController')
var systemsController = require('../controllers/systemsController')

router.get('/about', aboutsController.index)
router.get('/products/hair', hairsController.index)
router.get('/contact', contactsController.index)
router.get('/discover', discoversController.index)
router.get('/', homesController.index)
router.get('/services', servicesController.index)
router.get('/styles', stylesController.index)
router.get('/systems', systemsController.index)

module.exports = router
