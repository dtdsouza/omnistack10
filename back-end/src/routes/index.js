const { Router } = require('express')
const userRoutes = require('./user-router')

const routes = new Router()

routes.use(userRoutes)

module.exports = routes
