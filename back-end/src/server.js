const express = require('express')
const userRoutes = require('./routes')
const { InternalServerError } = require('./helpers/error-helper')
const cors = require('cors')
require('./database/mongoose')

const app = express()

app.use(async (error, req, res, next) => {
  if (error) {
    const hasCode = error.statusCode || error.status
    const body = hasCode ? error : InternalServerError(error.toString())
    res.status(hasCode || 500).json(body)
  } else { next() }
})

app.use(cors())

app.use(express.json())

app.use(userRoutes)

app.listen(3333, () => console.log('Server listening on 3333'))
