const express = require('express')
const app = express()
const Books = require('../database/db')

app.get('/', function (req, res) {
  Books.getAll()
  .then(results => {
    res.json(results)
  })
})

app.get('/delete/:id', function (req, res) {
  const {id} = req.params
  console.log('req.params:', req.params)
  console.log('id:',id )
})

module.exports = app
