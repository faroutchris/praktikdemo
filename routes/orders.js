var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/orders', function(req, res, next) {
    res.render('orders', { title: 'Camfil' });
});

module.exports = router;
