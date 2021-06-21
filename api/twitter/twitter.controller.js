const { fetchTweets } = require('./twitter.service')

async function getTweets(req, res, next) {
  try {

    const { query } = req.params;

    const tweets = await fetchTweets(query)

    res.send({ tweets });
  } catch (error) {
    next(error);
  }
}

module.exports = { getTweets }