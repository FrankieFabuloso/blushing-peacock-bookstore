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
  Books.deleteOne(id)
  .then( results => {
    res.send(deleted)
  })
})

module.exports = app
