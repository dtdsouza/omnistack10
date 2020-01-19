const Joi = require('joi')
const validate = require('../helpers/joi')

module.exports = {
  create: () =>
    validate(Joi.object({
      name: Joi.string(),
      github_username: Joi.string(),
      bio: Joi.string(),
      avatar_url: Joi.string(),
      skills: Joi.string().required(),
      longitude: Joi.number(),
      latitude: Joi.number()
    }))
}
