var express = require('express');
var router = express.Router();

/* GET page. */
router.get('/', function (req, res, next) {
	if (req.session.loggedin) {
		res.render('index', { 
			title: 'Accueil',
			username: req.session.username,
			type_user: req.session.type_user
		});
	} else {
		res.render('index', { 
			title: 'Accueil'
		})
	}
});

/* GET home page */
router.get('/home', function (req, res) {
	// If the user is loggedin
	if (req.session.loggedin) {
		// Output username
		res.send('Welcome back, ' + req.session.username + '!');
	} else {
		// Not logged in
		res.send('Please login to view this page!');
	}
	res.end();
});

/* GET A propos */
router.get('/a_propos', function (req, res, next) {
	if (req.session.loggedin) {
		res.render('a_propos', { 
			title: 'A propos',
			username: req.session.username,
			type_user: req.session.type_user
		});
	} else {
		res.render('a_propos', {
			title: 'A propos'
		})
	}
});

module.exports = router;
