require('should');
var async = require('./ext-module');

describe('Simple test', function () {
  
  it('should pass', function (done) {

    async(function (error) {

      error.message.should.equal('wrong');
      done();
    });

  });
});
