const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Log = require('../../models/Logs');
const validateLogsInput = require('../../validation/logs');


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
  const { errors, isValid } = validateLogsInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }
  
  const newLog = new Log({
    user: req.user.id,
    base: req.body.base,
    pair: req.body.pair,
    quantity: req.body.quantity,
    amtBase: req.body.amtBase,
    buyPrice: req.body.buyPrice,
    sellPrice: req.body.sellPrice,
    profit: req.body.profit,
    percent: req.body.percent
  })
  newLog.save().then(log => res.json(log));
})

// @route  delete api/logs
// @desc   delete entry
// @access private 
router.delete('/:id', (req, res) => {
  Log.findById(req.params.id)
    .then(entry => entry.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({ success: false }))
})

// @route  delete api/logs
// @desc   delete entry
// @access private 

module.exports = router;