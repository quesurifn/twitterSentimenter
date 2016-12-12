function seperateData(data) {
  tweets = [];
  for (var i = 0; i < data.length; i++) {
    tweets.push(data[i]['text']);
  }
  var stringTweets = tweets.toString();
  stringTweets = stringTweets.replace(/[\.\[\],#!@$%^&*;:{}=\-_`~()]/g , '');
  return stringTweets;
}

function finalScore(score, magnitude) {
  if (score > 0) {
    return "This person is positive";
  } else if (score < 0) {
    return "This person is negative";
  } else if (magnitude < 0.6 || score <= 0.1) {
    return "This person is neutral";
  }
}

module.exports.seperateData = seperateData;
module.exports.finalScore = finalScore;
