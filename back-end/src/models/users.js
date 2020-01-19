const mongoose = require('mongoose')

const User = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  skills: [],
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
})

module.exports = User
