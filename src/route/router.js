const router = require('express').Router()
const { join } = require('path')
const STATIC = require('../PATH')

router.get('/', (req, res) => {
  res.sendFile(join(STATIC, 'index.html'))
})

module.exports = router
