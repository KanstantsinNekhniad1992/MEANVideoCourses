var mongoose = require('mongoose');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('errors', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('meanDB opened');
    });

    var userSchema = mongoose.Schema ({
        firstName: String,
        lastName: String,
        userName: String
    });

    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function(err, collection) {
        if(collection.length == 0) {
            User.create({firstName: 'Kostya', lastName: 'Nekhniadovich', userName: 'koS'});
        }
    })
};