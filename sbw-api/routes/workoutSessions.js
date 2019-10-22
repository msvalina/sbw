var express = require('express');
var router = express.Router();
var ProgressionSession = require('../models/progressionEntries');
var WorkoutSession = require('../models/workoutSessions');

/* Get wkSessions listing for user */
router.get('/user/:id', function(req, res) {
  WorkoutSession.find({'user': req.params.id})
    .populate('progressionEntries')
    .exec(function (err, wkSessions) {
      if (err) return console.error(err);
      if (wkSessions) {
        res.json(wkSessions);
      }
    });
});

/* Create new workout session */
router.post('/', function(req, res) {
  var wrkJson = req.body;
  var workout = new WorkoutSession( wrkJson );
  workout.save(function (err) {
    if (err) return console.error(err);
    res.status(200).send("WorkoutSession saved " + workout._id);
  });
});

module.exports = router;
