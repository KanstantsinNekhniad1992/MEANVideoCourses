var auth = require('./auth'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function(app) {
    app.get('/partials/:partialPath', function(req, res) {
        res.render('partials/'+ req.params.partialPath);
    });

    app.get('/api/users', auth.requiresRole('Admin'), function(req, res) {
        User.find({}).exec(function(err, collection) {
            res.send(collection);
        })
    });

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