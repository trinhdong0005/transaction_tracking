function notFound(req, res, next) {
  res.status(404)
  const error = new Error('Not Found', req.originalUrl)
  next(error)
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500)
  res.json({
    message: err.message,
    stack: err.stack,
  })
}


function apiKeyAuthMiddleware(req, res, next) {
  const apiKey = process.env.API_KEY
  const incomingApiKey = req.headers['x-api-key']

  if (!incomingApiKey || incomingApiKey !== apiKey) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or missing API key.' })
  }
  next()
}

module.exports = {
  notFound,
  errorHandler,
  apiKeyAuthMiddleware
}