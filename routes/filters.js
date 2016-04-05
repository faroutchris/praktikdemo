var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/filters', function(req, res, next) {
    res.render('filters', { title: 'Camfil' });
});

module.exports = router;
