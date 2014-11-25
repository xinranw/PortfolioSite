var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/projects', function(req, res){
  res.render('projects', {});
});

router.get('/resume', function(req, res){
  res.render('resume', {});
});

router.get('/contact', function(req, res){
  res.render('contact', {});
});

module.exports = router;
