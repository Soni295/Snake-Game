const express = require('express');
const app = express();

const STATIC = require('./PATH');
const router = require('./route/router');
const PORT = 3000;
// Midlewares
app.use('/public', express.static(STATIC));
app.use(router);

app.listen(PORT, () =>
  console.log(`The server is listering in the port
  |
  +-> [34mhttp://localhost:${PORT}/[89m[0m
    `)
);
