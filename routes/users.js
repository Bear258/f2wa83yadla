var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
times=times+1;
  res.send('users accesses are:'+times);
  var times=times+1;
});

module.exports = router;
