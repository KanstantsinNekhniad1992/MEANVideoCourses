var express = require('express'),
    stylus = require('stylus'),
    bodyParser = require('body-parser'),
    logger = require('express-logger'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
    return stylus(str).set('filename', path);
}

//if(process.env.NODE_ENV === 'development') {
//    mongoose.connect('mongodb://localhost/meanDB');
//} else {
//    mongoose.connect('mongodb://kostya:pass@ds045021.mongolab.com:45021/meandb');
//}
mongoose.connect('mongodb://kostya:pass@ds045021.mongolab.com:45021/meandb');
var db = mongoose.connection;
db.on('errors', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('meanDB opened');
});
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

app.get('/partials/:partialPath', function(req, res) {
   res.render('partials/'+ req.params.partialPath);
});

var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;

Message.findOne().exec(function(err, messageDoc) {
    mongoMessage= messageDoc.message;
});

app.get('/', function(req, res) {
    res.render('index', {
        mongoMessage: mongoMessage
    });
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server running on port '+port);