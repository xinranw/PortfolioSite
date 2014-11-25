var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/contact', function(req, res){
  res.render('contact', {});
});

module.exports = router;
