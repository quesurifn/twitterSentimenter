var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var language = require('@google-cloud/language')({
  projectId: 'sentiment-analysis-152304',
  keyFilename: __dirname +'/Sentiment Analysis-1308e95a72be.json'
});
var analyzeIt = require("../analyzeIt.js");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/postUsername", function(req, res){
  console.log(req.body.userName);
  var client = new Twitter({
    consumer_key: 'ExpY4m9IT20O75q0Dbib2NP92',
    consumer_secret: 'BieIYVbvDKc0OrDCn5pNLuHD8HE3CctSonrFzkbnzYkflfeqJj',
    access_token_key: '4207282659-kArtWlcBQ8ZNwC3R0d2Mr3YaWoE9tXVjVcupOWU',
    access_token_secret: 'q4emfrOd8AXwWi2lYteadaRIhh8L01GIh6uJ2Fj0GHnoa'
  });

  client.get('statuses/user_timeline', {screen_name: req.body.userName, count:20}, function(error, tweets, response) {
    tweet = analyzeIt.seperateData(tweets);
    var document = language.document(tweet);
    if (!error) {
      var parsedScore;
      var parsedMagnitude;
      var finalScore;
      var options = {
        verbose: true
      };
      document.detectSentiment(options, function(err, score) {
        if (err) {
          console.log(err);
        }
          parsedScore = score.score;
          parsedMagnitude = score.magnitude;
          finalScore = analyzeIt.finalScore(parsedScore, parsedMagnitude);
          console.log(finalScore);
        });
      }//if not error
    });//client get statuses
  });

module.exports = router;
