var express = require('express'),
    stylus = require('stylus'),
    bodyParser = require('body-parser'),
    logger = require('express-logger'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    passport = require('passport');

module.exports = function(app, config) {
    function compile(str, path) {
        return stylus(str).set('filename', path);
    }
    app.set('views', config.rootPath+ '/server/views');
    app.set('view engine', 'jade');
    app.use(stylus.middleware({
        src: config.rootPath + '/public',
        compile: compile
    }));
    app.use(cookieParser());
    app.use(session({
        secret: 'koS',
        resave: true,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath+ '/public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(logger({path: "/log.txt"}));
};