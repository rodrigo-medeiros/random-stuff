exports.exercise_1 = function () {
  var buffer = initializeBuffer();
  printBuffer(buffer);
};

exports.exercise_2 = function () {
  var buffer = initializeBuffer();
  var slice = buffer.slice(40, 60);
  printBuffer(slice);
};

exports.exercise_3 = function () {
  var buffer = initializeBuffer(),
      slice = new Buffer(20),
      targetStart = 0,
      sourceStart = 40,
      sourceEnd = 60;
  buffer.copy(slice, targetStart, sourceStart, sourceEnd);
  printBuffer(slice);
};

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
