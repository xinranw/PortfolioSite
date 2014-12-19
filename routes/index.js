var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Xinran\'s Site' });
});

router.get('/portfolio', function(req, res){
  res.render('portfolio', { title:'Xinran\'s Portfolio' });
});

router.get('/resume', function(req, res){
  res.render('resume', { title:'Xinran\'s Resume' });
});

router.get('/contact', function(req, res){
  res.render('contact', { title:'Contact me!' });
});



module.exports = router;
