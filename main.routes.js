var { Router } = require('express');
var router = Router();


const twitterRoutes = require('./api/twitter/twitter.routes');
router.use('/tweets', twitterRoutes);
const sysInfoRoutes = require('./api/sysInfo/sysInfo.routes');
router.use('/health', sysInfoRoutes);

module.exports = router;