var assert = require("assert");

function asyncFunc (callback) {
  setTimeout(function () {
    callback("Done!");
  }, 1000);
}

describe("Testing async calls", function () {

  it("should pass", function (done) {

    asyncFunc(function (message) {
      assert.equal(message, "Done!");
      done();
    });

  });

  it("should fail", function (done) {

    asyncFunc(function (message) {
      assert.equal(message, "Done");
      done();
    });

  });

});
