const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Backend working....')
})
router.get('/signup', (req, res) => {
  res.send('Signup Page')
})

module.exports = router
