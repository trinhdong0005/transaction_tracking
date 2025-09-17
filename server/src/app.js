const express = require('express')
const bodyParser = require('body-parser')
const { notFound, errorHandler, apiKeyAuthMiddleware } = require('./middlewares')
const transaction = require('./routes/transaction')

const app = express()

require('dotenv').config()

app.use(bodyParser.json())

app.use('/api/v1/transaction', transaction)

app.use(notFound)
app.use(errorHandler)
app.use(apiKeyAuthMiddleware)

module.exports = app