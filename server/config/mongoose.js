var mongoose = require('mongoose'),
    UserModel = require('../models/User.js'),
    CourseModel = require('../models/Course');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('errors', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('meanDB opened');
    });
};

UserModel.createDefaultUsers();
CourseModel.createDefaultCourses();