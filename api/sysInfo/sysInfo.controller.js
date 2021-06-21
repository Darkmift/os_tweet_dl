const { fetchSystemInfo } = require('./sysInfo.service')

async function getHealth(req, res, next) {
  try {
    const health = await fetchSystemInfo()
    res.send({ health });
  } catch (error) {
    next(error);
  }
}

module.exports = { getHealth }