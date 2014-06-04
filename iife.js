var window = {};

(function () {
  window.boo = function () {
    var _a = 1;
    var inc = function () {
      _a++;
      console.log(_a);
      return _a;
    };
    return {
      increment: inc
    };
  }
}());

var b = window.boo();
b.increment();
b.increment();
b.increment();
