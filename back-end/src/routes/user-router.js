const { Router } = require('express')
const Validator = require('../validators/users-validator')
const userController = require('../controllers/users-controller')
const routes = new Router()

routes.get('/users', userController.index)
routes.post('/users', Validator.create(), userController.store)

module.exports = routes
