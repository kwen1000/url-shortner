var mongodb = require('mongodb');
var validurl = require('valid-url');
var shortid = require('shortid');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
