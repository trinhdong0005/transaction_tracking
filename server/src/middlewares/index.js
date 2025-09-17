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


function apiKeyAuthMiddleware(err, req, res, next) {
  const API_KEY = process.env.YOUR_API_KEY
  const incomingApiKey = req.headers['x-api-key']

  if (!incomingApiKey || incomingApiKey !== API_KEY) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or missing API key.' })
  }
  next()
}

module.exports = {
  notFound,
  errorHandler,
  apiKeyAuthMiddleware
}