var mongoose = require('mongoose');

var userSchema = mongoose.Schema ({
    firstName: { type: String, required: '{PATH} is required'},
    lastName: { type: String, required: '{PATH} is required'},
    userName: { type: String, required: '{PATH} is required', unique: true},
    salt: { type: String, required: '{PATH} is required'},
    hashed_pwd: { type: String, required: '{PATH} is required'},
    roles: [String]
});

userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encryption.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
};

var User = mongoose.model('User', userSchema);


function createDefaultUsers() {
    User.find({}).exec(function (err, collection) {
        if (collection.length == 0) {
            var salt, pwd;
            salt = encryption.createSalt();
            pwd = encryption.hashPwd(salt, 'koS');
            User.create({firstName: 'Kostya', lastName: 'Nekhniadovich', userName: 'koS', salt: salt, hashed_pwd: pwd, roles: 'admin' });
            salt = encryption.createSalt();
            pwd = encryption.hashPwd(salt, 'joe');
            User.create({firstName: 'Joe', lastName: 'Joe', userName: 'joe', salt: salt, hashed_pwd: pwd, roles: 'user' });
            salt = encryption.createSalt();
            pwd = encryption.hashPwd(salt, 'three');
            User.create({firstName: 'Three', lastName: 'Three', userName: 'three', salt: salt, hashed_pwd: pwd });
        }
    });
};

exports.createDefaultUsers = createDefaultUsers;