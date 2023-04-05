var express = require('express');
var router = express.Router();
var userModel = require('../model/Utilisateur');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


module.exports = router;

router.get('/userslist', function(req, res, next) {
    result = userModel.readall(function(result) {
        res.render('userList', {
            title: 'List des utilisateurs',
            users: result
        })
    });
});

/* POST users */
router.post('/login', function(req, res, next) {
    console.log("Connexion d'un utilisateur");
    var email = req.body.email;
    var password = req.body.password;
    userModel.areValid_login(email, password, function(result) {
        if (result) {
            console.log("Utilisateur connecté");
        } else {
            res.redirect('/users/login');
        }
    });
});
