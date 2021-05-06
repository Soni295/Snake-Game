// Modules
const express = require('express')
const app = express()

const STATIC = require('./PATH')
const router = require('./route/router')

// Midlewares
app.use('/public', express.static(STATIC))
app.use(router)

app.listen(3000, () => console.log('The server is listering in the port 3000'))

