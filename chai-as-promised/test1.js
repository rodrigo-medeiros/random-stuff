var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    should = chai.should();

var coderbits = require('coderbits');

chai.use(chaiAsPromised);

describe('Chai regular assertion, without promises', function () {

  it('should pass', function (done) {
    
    var obj= {
      user: "user",
      title: "title",
      content: "content",
      message: "message"
    };

    obj.should.include.keys(["user", "title", "content"]);
    obj.should.includes.keys(["user", "title", "content"]);
    obj.should.contain.keys(["user", "title", "content"]);
    obj.should.contains.keys(["user", "title", "content"]);

    done();

  });
});

describe('Chai assertion with promises', function () {

  it('should pass', function (done) {
    
    var obj= {
      user: "user",
      title: "title",
      content: "content",
      message: "message"
    };

    Promise.resolve(obj).should.eventually.include.keys(["user", "title", "content"]);
    Promise.resolve(obj).should.eventually.includes.keys(["user", "title", "content"]);
    Promise.resolve(obj).should.eventually.contain.keys(["user", "title", "content"]);
    Promise.resolve(obj).should.eventually.contains.keys(["user", "title", "content"]);

    done();

  });
});

describe('Chai assertion with promises, in async context', function () {
  this.timeout(10000);

  it('should pass', function (done) {
    
    var user = {
      user: 'rodrigomangue',
      json: true
    }

    coderbits(user, function (error, profile) {

      Promise.resolve(profile).should.eventually.include.keys(['name', 'title', 'bio', 'rank']);
      Promise.resolve(profile).should.eventually.includes.keys(['name', 'title', 'bio', 'rank']);
      Promise.resolve(profile).should.eventually.contain.keys(['name', 'title', 'bio', 'rank']);
      Promise.resolve(profile).should.eventually.contains.keys(['name', 'title', 'bio', 'rank']);

      done();
    });

  });
});
