async function getTweets(req, res, next) {
  try {
    res.send({ req: req.params });
  } catch (error) {
    next(error);
  }
}

module.exports = { getTweets }