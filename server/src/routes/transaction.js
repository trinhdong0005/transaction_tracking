const express = require('express')
const router = express.Router()
const fs = require('fs')

router.post('/', async (req, res, next) => {
  try {
    const body = req.body
    // to do DB insert
    fs.appendFileSync('data.txt', JSON.stringify(body) + '\n')
    res.sendStatus(201)
  } catch (error) {
    next(error);
  }
})

module.exports = router;