const Joi = require('joi')
const validate = require('../helpers/joi')

module.exports = {
  create: () =>
    validate(Joi.object({
      name: Joi.string().required(),
      github_username: Joi.string(),
      bio: Joi.string(),
      avatar_url: Joi.string(),
      skills: Joi.array().min(1).required(),
      location: Joi.array().min(2).max(2)
    }))
}
