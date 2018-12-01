require('babel-polyfill');
require('babel-register')({
    presets:['latest']
});

module.exports = require('./server.js');