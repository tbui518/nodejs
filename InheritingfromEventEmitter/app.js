var EventEmitter = require('events');
var util = require('util');

function Greetr(){
    this.greeting = 'Hello World!';

}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (){
    console.log(this.greeting);
    this.emit('greet');
}

