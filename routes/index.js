var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('layout', { message: 'Hello there!' })
})

module.exports = router
