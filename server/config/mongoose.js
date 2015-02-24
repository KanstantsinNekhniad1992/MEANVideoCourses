var mongoose = require('mongoose');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('errors', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('meanDB opened');
    });
};