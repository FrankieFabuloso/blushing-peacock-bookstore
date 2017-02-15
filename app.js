const express = require('express')
const path = require('path');
const app = express()
const pug = require('pug')
const bodyParser = require('body-parser')
const api = require('./routes/api')
const index = require('./routes/index')

app.set('view engine', 'pug')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index)
app.use('/api', api)


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
