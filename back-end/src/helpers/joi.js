const { BadRequest } = require('./error-helper.js')

module.exports = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body)
  error ? res.status(400).json(BadRequest(error.details[0].message)) : next()
}
