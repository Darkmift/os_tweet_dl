const { Router } = require('express');
const router = Router();

const { getHealth } = require('./sysInfo.controller');

router.get('/', getHealth);

module.exports = router;