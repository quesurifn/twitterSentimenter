# twitterSentimenter

### Objective 

I've always been interested in analyzing peoples behavior. Through a google search on day I found that Google had created its
Natural Language API that was able to detect emotion in text. Ever since hearing about one options contract trader making several million
dollars from a bot and a tweet, I have been supremely interested in twitter, and all of the real time data you can pull from people's 
tweets.

Enter twitterSentimenter. I orginally put this project off for quite a while into my web development journey only to come back to it when I
felt I was ready. After I had played with Node for a while I decided to bite the bullet and do it and I couldn't be more pleased with the results!

My Twitter sentimenter asks the user (through Angular) to put in a twitter user name, then sends that off to node which then calls the twit
API to send back that users 20 latest tweets, then parses those tweets into one long string which the google api analyzes and through a helper 
function, displayes the numerical result into english, then returns that back to angular as the routes response. 

### Technologies Used 

1. HTML
2. CSS
3. Bootstrap
4. Javascript
5. Angular JS 
6. Node / Express
7. Google Natrual Language API
8. Twit

### How to use

1. Navigate [here](https://twitter-sentimenter.herokuapp.com/)
2. Enter A valid twitter username
3. Hit Submit
4. Enjoy running the usernames of different friends!
