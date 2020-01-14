const mongoose = require('mongoose')
const { MONGO_CONNECTION_STRING } = require('../config/env')

module.exports = mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
