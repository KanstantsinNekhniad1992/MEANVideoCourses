var auth = require('./auth'),
    mongoose = require('mongoose'),
    users = require('../controllers/users');
    User = mongoose.model('User');

module.exports = function(app) {
    app.get('/partials/:partialPath', function(req, res) {
        res.render('partials/'+ req.params.partialPath);
    });

    app.get('/api/users', auth.requiresRole('admin'),  users.getUsers);
    app.post('/api/users', users.createUser);
    app.post('/login',  auth.authenticate);

    app.post('/logout', function(req, res) {
        req.logout();
        res.send();
    });

    app.get('/', function(req, res) {
        res.render('index', {
            bootstrappedUser: req.user
        });
    });
};