var EventEmitter = require('events').EventEmitter,
    util = require('util');

var Ticker = function () {
  var self = this;
  setInterval(function () {
    self.emit('tick');
  }, 1000);
}

util.inherits(Ticker, EventEmitter);

module.exports = Ticker;
