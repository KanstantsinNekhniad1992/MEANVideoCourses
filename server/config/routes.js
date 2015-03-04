var auth = require('./auth');

module.exports = function(app) {
    app.get('/partials/:partialPath', function(req, res) {
        res.render('partials/'+ req.params.partialPath);
    });

    app.post('/login',  auth.authenticate);

    app.post('/logout', function(req, res) {
        req.logout();
        res.send();
    });

    app.get('/', function(req, res) {
        res.render('index');
    });
};