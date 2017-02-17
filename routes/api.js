const express = require('express')
const app = express()
const Books = require('../database/db')

app.get('/', function (req, res) {
  Books.getAll()
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

app.put('/:id', function(req, res) {
  const {id} = req.params
  const {column} = req.body
  console.log('whats happening ahahhhhhhhhh:', req.body)
  // const {id} = req.params
  // const updateVal = req.body.title? req.body.title : req.body.description
})

app.post( '/', function (req, res) {
  const {title, description} = req.body
  Books.add(title, description)
    .then( results => {
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
