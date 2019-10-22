var mongoose = require('mongoose');
var progressionSchema = new mongoose.Schema({
  routine: String,
  category: String,
  name: String,
  position: Number,
  description: String,
  startLevel: Number,
  goal: Number,
  restTime: Number,
  image: [{ urlBig: String }, {urlSmall: String}],
  video: [{ url: String }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
var progression = mongoose.model('Progression', progressionSchema);
module.exports = progression;
