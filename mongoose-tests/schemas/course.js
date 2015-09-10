var mongoose = require('mongoose');

var CourseSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  duration: Number,
  disciplines: [{
    name: [{
      type: String,
      trim: true,
      required: true
    }],
    books: [{
      name: {
        type: String,
        trim: true,
        required: true
      },
      author: {
        type: String,
        trim: true,
        required: true
      }
    }]
  }]
});

module.exports = mongoose.model('Course', CourseSchema);
