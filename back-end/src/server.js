const express = require('express')
const userRoutes = require('./routes')
require('./database/mongoose')

const app = express()

app.use(express.json())

app.use(userRoutes)

app.listen(3333, () => console.log('Server listening on 3333'))
