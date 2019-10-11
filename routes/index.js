var express = require('express');
var router = express.Router();

var controller = require('../controllers/index');

router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

router.post('/encript', (req, res, next) => {
  controller.postE(req, res, next);
});

router.post('/decripty', (req, res, next) => {
  controller.postD(req, res, next);
});

module.exports = router;
