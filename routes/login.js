var express = require('express');
var router = express.Router();

var hash = require('pbkdf2-password');
var path = require('path');
var session = require('express-session');


/* GET login. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Route Login' });
});

module.exports = router;
