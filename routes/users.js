var express = require('express');
const user = require('../models/user');
var router = express.Router();
var User = require("../models/user")

/* GET users listing. */
router.get('/register', function (req, res, next) {
  res.render("Users/register")
});
router.get('/login', function (req, res, next) {
  res.render("Users/login")
});
router.get('/logout', function (req, res, next) {
  req.session.user = null;
  res.redirect("/login")
});
router.post('/login', async function (req, res, next) {
  let user = await User.findOne({ email: req.body.email, password: req.body.password })
  if (!user) return res.redirect("/login")
  req.session.user = user;
  return res.redirect("/")
});
router.post('/register', async function (req, res, next) {
  let user = new User(req.body);
  await user.save();
  res.redirect("/login")
});

module.exports = router;
