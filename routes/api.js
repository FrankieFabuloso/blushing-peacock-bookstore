const express = require('express')
const app = express()
const Books = require('../database/db')

app.get('/', function (req, res) {
  Books.getAll()
  .then(results => {
    res.json(results)
  })
})

app.delete('/:id', function (req, res) {
  const {id} = req.params
  Books.deleteOne(id)
    .then( results => {
      res.send({deleted: 1})
  })
})

app.post('/', function (req, res){
  const body = req.body
  res.json({'received': 1})
})

app.post( '/add', function (req, res) {
  const {title, description} = req.body
  Books.add(title, description)
    .then( results => {
      res.status(200).json({data: results})
    })
})

module.exports = app
