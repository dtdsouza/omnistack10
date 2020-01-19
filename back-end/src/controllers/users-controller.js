module.exports = {
  async index (request, response) {
    response.status(200).json({
      message: 'List of users'
    })
  },

  async store (request, response) {
    response.status(200).json({
      message: 'Create a user'
    })
  }
}
