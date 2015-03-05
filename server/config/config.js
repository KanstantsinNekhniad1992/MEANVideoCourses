var path = require('path');
var rootPath = path.normalize(__dirname + '../../../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/meandb',
        port: process.env.PORT || 3000
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://kostya:pass@ds045021.mongolab.com:45021/meandb',
        port: process.env.PORT || 80
    }
};