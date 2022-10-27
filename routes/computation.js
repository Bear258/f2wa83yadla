var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var swarna1=Math.floor(Math.random()*30);
    var swarna2=Math.floor(Math.random()*15);
    var latha1=Math.atan2(swarna1);
    var latha2=Math.atanh(swarna1,swarna2);
    var latha3=Math.cbrt(swarna1);

  res.render('computation', { title: 'Yadla Swarna latha Bonus',
title1:'Random Absolute Input value',swarna1:swarna1,
title2:'Random Absolute Input value',swarna2:swarna2 ,
latha1:latha1, latha2:latha2 ,latha3:latha3 });
});

module.exports = router;