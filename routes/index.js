var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('layout')
})

router.get('/book/:id', function (req, res) {
  res.render('book')
})

module.exports = router
