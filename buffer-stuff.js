exports.exercise_1 = (function () {
  var buffer = initializeBuffer();
  printBuffer(buffer);
})();

function initializeBuffer () {
  var buffer = new Buffer(100);
  for (var i = 0; i < 100; i++) {
    buffer[i] = i;
  }
  return buffer;
}

function printBuffer (buffer) {
  for (var i = 0; i < buffer.length; i++) {
    console.log(buffer[i]);
  }
}
