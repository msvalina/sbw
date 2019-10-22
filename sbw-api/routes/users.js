var express = require('express');
var router = express.Router();
var User = require('../models/users');

router.get('/', function(req, res) {
  User.find(function (err, users) {
    if (err) return console.error(err);
    if (users) {
      res.json(users);
    }
  });
});

router.post('/', function(req, res) {
  var userjson = req.body;
  var user = new User(userjson);
  user.save(function (err) {
    if (err) return console.error(err);
    res.send("User saved " + user._id);
  });
});

router.put('/:id', function(req, res) {
  // Can't use findOneAndUpdate bc pre save hook won't be called
  User.findById(req.params.id, function (err, user) {
    if (err) return console.error(err);
    user = Object.assign(user, req.body);
    user.save(function (err) {
      if(err) return res.status(500).send("Failed to update user");
      res.send("User updated " + user._id);
    });
  });
});

router.delete('/:id', function(req, res) {
  User.findOneAndRemove({_id: req.params.id}, req.body, function (err, user) {
    if (err) return console.error(err);
    if(!user) return res.send("No user with id: " + req.params.id);
    res.send("User deleted id: " + user._id);
  });
});
module.exports = router;
