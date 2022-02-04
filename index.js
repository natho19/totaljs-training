// ===================================================
// Total.js start script
// https://www.totaljs.com
// ===================================================

const options = {};
const mongoose = require('mongoose');

options.ip = '127.0.0.1';
// options.port = parseInt(process.argv[2]);
// options.unixsocket = require('path').join(require('os').tmpdir(), 'app_name');
// options.unixsocket777 = true;
// options.config = { name: 'Total.js' };
// options.sleep = 3000;
// options.inspector = 9229;
// options.watch = ['private'];
// options.livereload = 'https://yourhostname';
// options.https = { key: Fs.readFileSync('keys/agent2-key.pem'), cert: Fs.readFileSync('keys/agent2-cert.pem')};
// options.watcher = true; // enables watcher for the release mode only controlled by the app `F.restart()`
// options.edit = 'wss://www.yourcodeinstance.com/?id=projectname'

// Service mode:
options.servicemode = process.argv.indexOf('--servicemode', 1) !== -1;
// options.servicemode = 'definitions,modules,config';

// Enables cluster:
// options.cluster = 'auto';
// options.cluster_limit = 10; // max 10. threads (works only with "auto" scaling)

// Enables threads:
// options.cluster = 'auto';
// options.cluster_limit = 10; // max 10. threads (works only with "auto" scaling)
// options.timeout = 5000;
// options.threads = '/api/';
// options.logs = 'isolated';

var type = process.argv.indexOf('--release', 1) !== -1 ? 'release' : 'debug';
require('total4/' + type)(options);

// Connecting
mongoose.connection.on('connecting', function() {
    console.log('MongoDB connecting...');
})

// Error
mongoose.connection.on('error', function(error) {
    console.log('Error in MongoDB connection: ' + error.message);
})

// Connected
mongoose.connection.on('connected', function() {
    console.log('MongoDB connected!');
})

// Open
mongoose.connection.once('open', function() {
    console.log('MongoDB connection opened!');
})

// Reconnected
mongoose.connection.on('reconnected', function() {
    console.log('MongoDB reconnected!');
})

// Reconnexion
mongoose.connection.on('disconnected', function() {
    console.log('MongoDB disconnected!');
    mongoose.connect('mongodb://localhost:27017/training');
})

// Initial connection
mongoose.connect('mongodb://localhost:27017/training');