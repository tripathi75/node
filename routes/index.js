var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){
	res.render('index');
});

//AT
router.get('/transporter', ensureAuthenticated, function(req, res){
	res.render('transporter');
});

//AT
router.get('/shipper', ensureAuthenticated, function(req, res){
	res.render('shipper');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;