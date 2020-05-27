const express = require('express');
const router = express.Router();

// @route    GET api/auth
// @desc     Test router
// @access   Public
router.get('/', (req, res) => res.send('Authh route'));

module.exports = router;