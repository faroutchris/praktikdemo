var express = require('express');
var router = express.Router();

router.get('/products', function(req, res, next) {
  res.send('respond with a new resource');
});

module.exports = router;
