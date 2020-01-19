const User = require('../models/users')
const parseStringToArray = require('../helpers/parseStringToArray')
const axios = require('axios')

module.exports = {
  async index (request, response) {
    const { longitude, latitude, skills } = request.query

    const userQuery = User.find()

    if (longitude || latitude) {
      userQuery.where('location', {
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              cordinates: [longitude, latitude]
            }
          }
        }
      })
    }

    if (skills) {
      const arrayOfSkills = parseStringToArray(skills)
      userQuery.where('skills', {
        $in: arrayOfSkills
      })
    }

    const user = await userQuery

    response.status(200).json({
      message: 'List of users',
      data: user
    })
  },

  async store (request, response) {
    const {
      longitude,
      latitude,
      name,
      github_username,
      skills
    } = request.body

    const githubResponse = await axios.get(`https://api.github.com/users/${github_username}`)

    const { name: githubName = login, avatar_url, bio } = githubResponse.data

    const user = await User.create({
      name: name || githubName,
      github_username,
      avatar_url,
      bio,
      skills: parseStringToArray(skills),
      location: {
        type: 'Point',
        coordinates: [longitude, latitude]
      }
    })

    response.status(200).json({
      message: 'Create a user',
      data: user
    })
  }
}
