var mongoose = require('mongoose'),
    crypto = require('crypto');

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
        userName: String,
        salt: String,
        hashed_pwd: String
    });

    userSchema.methods = {
        authenticate: function(passwordToMatch) {
            return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
        }
    }

    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function(err, collection) {
        if(collection.length == 0) {
            var salt, pwd;
            salt = createSalt();
            pwd = hashPwd(salt, 'koS');
            User.create({firstName: 'Kostya', lastName: 'Nekhniadovich', userName: 'koS', salt: salt, hashed_pwd:pwd });
        }
    })
};

function createSalt() {
    return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd) {
    var hmac = crypto.createHmac('sha1', salt);
    return hmac.update(pwd).digest('hex');
}