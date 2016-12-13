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
    return "This person trends positive";
  } else if (score < 0) {
    return "This person trends negative";
  } else if (magnitude < 0.6 || score <= 0.1) {
    return "This person trends more neutral";
  }
}

function finalMagnitude(magnitude) {
  if (magnitude < 1) {
    return " to a weak magnitude";
  } else if (magnitude  >= 1 && magnitude <= 2) {
    return " to a weaker magnitude";
  } else if (magnitude >= 2 && magnitude <= 3) {
      return " to an average magnitude";
  } else if (magnitude >= 3 && magnitude <= 4) {
    return " to a stronger magnitude";
  } else if (magnitude >= 4 && magnitude <= 5) {
    return " to a strong magnitude";
  } else if (magnitude === 5) {
    return " to a very strong magnitude";
  }
}

module.exports.seperateData = seperateData;
module.exports.finalScore = finalScore;
module.exports.finalMagnitude = finalMagnitude;
