function async (cb) {
  cb(new TypeError('wrong'));
}

module.exports = async;
