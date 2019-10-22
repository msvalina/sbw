// Exercise Progression Entry
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
  datetime: { type: Date, default: Date.now },
  progression: { type: mongoose.Schema.Types.ObjectId, ref: 'Progression' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  level: Number,
  performed: Number,
  repeat: Boolean,
  order: Number,
  note: String
});
// Set collection name explicitly
schema.set('collection', 'progressionEntries');

var progressionEntry = mongoose.model('progressionEntries', schema);
module.exports = progressionEntry;
