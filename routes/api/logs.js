const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Log = require('../../models/Logs');


// @route  Get api/logs
// @desc   Return current user logs
// @access private 
router.get('/', passport.authenticate('jwt', { session: false}), (req, res) => {
  Log
    .find({ user: req.user.id })
    .sort({ date: -1 })
    .then(logs => res.json(logs))
});

// @route  post api/logs
// @desc   post new logs
// @access private 
router.post('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  const newLog = new Log({
    user: req.user.id,
    base: req.body.base,
    pair: req.body.pair,
    quantity: req.body.quantity,
    buyPrice: req.body.buyPrice,
    sellPrice: req.body.sellPrice
  })
  newLog.save().then(log => res.json(log));
})


module.exports = router;