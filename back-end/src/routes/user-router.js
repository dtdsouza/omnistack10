const { Router } = require('express')

const routes = new Router()

routes.get('/users', (req, res) => {
  res.status(200).json({
    message: 'oloko'
  })
})

module.exports = routes
