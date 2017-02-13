const express = require('express')
const app = express()
const pug = require('pug')
const bodyParser = require('body-parser')
const api = require('./routes/api')
const index = require('./routes/index')

app.set('view engine', 'pug')

app.use('/index', index)
app.use('/', api)


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
