const express = require('express')
const app = express()
const Books = require('../database/db')

app.get('/', function (req, res) {
  Books.getAll()
  .then(results => {
    res.status(200).json(results)
  })
})

app.get('/book/:id', function (req, res) {
  const {id} = req.params
  console.log('id:', id)
  Books.getById(id)
  .then(results => {
    res.status(200).json(results)
  })
})

app.delete('/:id', function (req, res) {
  const {id} = req.params
  Books.deleteOne(id)
    .then( results => {
      res.send({deleted: 1})
  })
})

app.put('/', function(req, res) {
  const {id, column, data} = req.body
  console.log(id, column, data)
  Books.update(id, column, data)
  .then()
})

app.post( '/', function (req, res) {
  const {title, description, img_url, author, genre} = req.body
  console.log('req.body:', req.body)
  Books.add(title, description, img_url, author, genre)
    .then( results => {
      console.log('results:', results)
      res.status(200).json({data: results})
    })
})

app.get( '/search', function (req, res) {
  const term = req.query.search
  console.log(term)
  Books.search(term)
  .then(results => {
    res.status(200).json({data: results})
  })
})

// post route send the search term and redirects to the search page
// get route that renders the search and displays the search querey


module.exports = app
