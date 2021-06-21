async function getHealth(req, res, next) {
  try {
    res.send({ req: req.params });
  } catch (error) {
    next(error);
  }
}

module.exports = { getHealth }