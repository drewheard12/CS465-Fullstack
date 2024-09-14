var express = require('express');
var router = express.Router();

const crtlMain= require('../controllers/main');
/* GET home page. */
router.get ('/', crtlMain.index);


//old
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

module.exports = router;
