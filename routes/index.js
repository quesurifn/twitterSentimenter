var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var language = require('@google-cloud/language')({
  projectId: 'sentiment-analysis-152304',
  keyFilename: __dirname +'/Sentiment Analysis-1308e95a72be.json'
});
var analyzeIt = require("../analyzeIt.js");
require('dotenv').config()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/postUsername", function(req, res){
  var client = new Twitter({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.access_token,
    access_token_secret: process.env.access_secret
  });// client
  client.get('statuses/user_timeline', {screen_name: req.body.userName, count:20}, function(error, tweets, response) {
    if (!error) {
      var parsedScore;
      var parsedMagnitude;
      var finalScore;
      var finalMagnitude;
      var result;
      var options = {
        verbose: true
      }; // options
      tweet = analyzeIt.seperateData(tweets);
      var document = language.document(tweet)
      document.detectSentiment(options, function(err, score) {
        if (err) {
          console.log(err);
          res.send("Invalid Username");
        } //if err
        console.log(score);
          parsedScore = score.score;
          parsedMagnitude = score.magnitude;
          finalScore = analyzeIt.finalScore(parsedScore, parsedMagnitude);
          finalMagnitude = analyzeIt.finalMagnitude(parsedMagnitude);
          result = finalScore + finalMagnitude;
          console.log(finalMagnitude);
          console.log(result);
          res.send(result);//send to angular
        });//detect sentiment
      } else {
        console.log(error)
      res.send("Invalid Username");
    }
  });//client get statuses
});//router post
module.exports = router;
