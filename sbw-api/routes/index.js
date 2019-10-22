var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/users');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'SBW API' });
});

router.post('/api/login', function (req, res) {
  if(!req.body.user.username) {
    return res.status(401).json({success: false, 
                                message: 'Authentication failed. "username" is missing in the body!' })
  }
  if(!req.body.user.password) {
    return res.status(401).json({success: false, 
                                message: 'Authorization failed. "password" is missing in the body!' })
  }
  User.findOne({
    username: req.body.user.username
  }, function (err, user) {
    if (err) return console.error(err);
    if (!user) {
      res.status(401).json({success: false, 
                           message: 'Authentication failed. User not found!'});
    } else {
      user.comparePassword(req.body.user.password, function(err, isMatch) {
        if(err) return res.status(401).json({
          success: false,
          message: 'Authentication failed.'
        })
        if(!isMatch) {
          return res.status(401).json({
            success: false,
            message: 'Authentication failed. Wrong password!'
          });
        }
        user.password = null;
        req.session.user = user;
        var token = jwt.sign(user, 'monkey');
        res.cookie('token', token, {maxAge: 900000});
        res.send(user);
      });
    }
  });
});

router.get('/api/loadauth', function (req, res) {
  req.session.user ? res.send(req.session.user) : res.send(null)
});

router.post('/api/logout', function (req, res){
  if (req.session.user) {
    req.session.destroy(function(err) {
      res.clearCookie('connect.sid', { path: '/' });
      res.clearCookie('token', { path: '/' });
      res.sendStatus(200);
    });
  }
  else {
    res.clearCookie('connect.sid', { path: '/' });
    res.clearCookie('token', { path: '/' });
    res.send('No session find clear cookies anyway', 200);
  }
});

module.exports = router;
