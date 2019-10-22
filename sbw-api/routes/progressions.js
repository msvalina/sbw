var express = require('express');
var router = express.Router();
var Progression = require('../models/progressions');

router.get('/', function(req, res) {
  Progression.find(function (err, progressions) {
    if (err) return console.error(err);
    if (progressions) {
      res.json(progressions);
    }
  });
});

router.get('/category/:name', function(req, res) {
  Progression.find({'category': req.params.name}, function (err, progressions) {
    if (err) return console.error(err);
    if (progressions) {
      res.json(progressions);
    }
  });
});

router.get('/:id', function(req, res) {
  var query= {'position': parseInt(req.params.id)};
  Progression.findOne(query, function (err, progression) {
    if (err) return console.error(err);
    if (progression) {
      res.json(progression);
    }
  });
});

/* Create new progression */
router.post('/', function(req, res) {
  var progjson = req.body;
  var prog = new Progression( progjson );
  prog.save(function (err) {
    if (err) return console.error(err);
    res.send("Progression saved " + prog._id);
  });
});

/* Update existing progression */
router.put('/:id', function (req, res) {
  var progjson = req.body;
  var query = { _id: req.params.id };
  Progression.findOneAndUpdate(query, progjson, function (err, progression){
    if (err) return console.error(err);
    res.send("Progression updated " + progression._id + " " + progression.position);
  });
});

/* Delete existing progression */
router.delete('/:id', function (req, res) {
  var query = { _id: req.params.id };
  Progression.findOneAndRemove(query, function (err, progression){
    if (err) return console.error(err);
    res.send("Progression deleted " + progression._id );
  });
});

module.exports = router;
