var express = require('express');
var router = express.Router();

var controller = require('../controllers/travel');
/* GET home page. */
router.get ('/', controller.travel);


//old
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

module.exports = router;