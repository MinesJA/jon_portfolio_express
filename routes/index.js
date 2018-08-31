var feed = require("feed-read-parser");
var express = require('express');
var router = express.Router();
var rssUrl = "https://medium.com/feed/@jonathanmines"


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/resume', function(req, res, next){
  res.render('resume');
})

router.get('/blog', function(req, res, next){
  res.render('blog', {rss: "hey"});
})

router.get('/projects', function(req, res, next){
  res.render('projects');
})

router.get('/contact', function(req, res, next){
  res.render('contact');
})

module.exports = router;
