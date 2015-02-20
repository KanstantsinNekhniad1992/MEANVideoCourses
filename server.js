var express = require('express'),
    stylus = require('stylus'),
    bodyParser = require('body-parser'),
    logger = require('express-logger');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.set('views', __dirname+ '/server/views');
app.set('view engine', 'jade');
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}));
app.use(express.static(__dirname+ '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(logger({path: "/log.txt"}));
app.get('*', function(req, res) {
    res.render('index');
});

var port = 3000;

app.listen(port);
console.log('Server running on port '+port);