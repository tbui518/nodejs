var util = require('util');

var name = 'Jay';
var greeting = util.format('Hello, %s', name);
util.log(greeting);