// Workout Session
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
  datetime: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  progressionEntries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'progressionEntries' }],
  note: String,
});
module.exports = mongoose.model('WorkoutSession', schema);
