var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', { //view/carpetaadmin/login.hbs
        layout: 'admin/layout'//view/carpetaadmin/layout.hbs
   });
});

module.exports = router;
