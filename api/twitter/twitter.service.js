var Twitter = require('twitter');

var twitterClient = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

async function fetchTweets(queryString) {
  try {
    return await twitterClient.get('search/tweets', { q: queryString, count: 10 })
  } catch (error) {
    return error
  }
}



module.exports = {
  fetchTweets,
};