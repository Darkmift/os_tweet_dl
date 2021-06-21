const { Router } = require('express');
const router = Router();

const { getTweets } = require('./twitter.controller');

router.get('/:query', getTweets);

module.exports = router;