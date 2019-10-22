var express = require('express');
var router = express.Router();
var progressionEntry = require('../models/progressionEntries');

/* Get pgEntries collection. */
router.get('/user/:id', function(req, res) {
  progressionEntry.find({'user': req.params.id}, function (err, pgEntries) {
    if (err) return console.error(err);
    if (pgEntries) {
      res.json(pgEntries);
    }
  });
});

/* Get progression by id */
router.get('/:id', function(req, res) {
  progressionEntry.findById(req.params.id, function (err, progression) {
    if (err) {
      console.error(err);
      res.send("fak it ");
    }    
    if (progression !== null) {
      res.json(progression);
    }
  });
});

/* Create new progression entry */
router.post('/', function(req, res) {
  var progJson = req.body;
  var progE = new progressionEntry( progJson );
  progE.save(function (err) {
    if (err) return console.error(err);
    res.status(200).send("progressionEntry saved " + progE._id);
  });
});

/* Update existing progressionEntry */
router.put('/:id', function (req, res) {
  var progJson = req.body;
  var query = { _id: req.params.id };
  progressionEntry.findOneAndUpdate(query, progJson, function (err, progressionEntry){
    if (err) return console.error(err);
    res.send("progressionEntry updated " + progressionEntry._id);
  });
});

/* Delete existing progression */
router.delete('/:id', function (req, res) {
  var query = { _id: req.params.id };
  progressionEntry.findOneAndRemove(query, function (err, progression){
    if (err) return console.error(err);
    res.send("progressionEntry deleted " + progression._id );
  });
});

module.exports = router;
