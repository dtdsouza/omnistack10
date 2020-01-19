module.exports = {
  NotFound: (message = 'The requested resource couldn\'t be found') => ({
    name: 'Not Found',
    message,
    errorCode: 404,
    statusCode: 404
  }),
  BadRequest: (message = 'The JSON is malformed') => ({
    name: 'Bad Request',
    message,
    errorCode: 400,
    statusCode: 400
  }),
  Forbidden: (message = 'You aren\'t allowed to access this resource') => ({
    name: 'Forbidden',
    message,
    errorCode: 403,
    statusCode: 403
  }),
  InternalServerError: (message = 'The API did something wrong') => ({
    name: 'Internal Server Error',
    message,
    errorCode: 500,
    statusCode: 500
  }),
  InvalidRequest: (message = 'Invalid request data') => ({
    name: 'Invalid Request',
    message,
    errorCode: 422,
    statusCode: 422
  }),
  Unauthorized: (message = 'Bad credentials') => ({
    name: 'Unauthorized',
    message,
    errorCode: 401,
    statusCode: 401
  })
}
