const express = require('express');
const router = express.Router();

// @route  GET api/portfolio/test
// @desc   Tests post route
// @access public
router.get('/test', (req, res) => res.json({msg: 'portfolio  works'}));

module.exports = router;