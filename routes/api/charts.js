const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Chart = require('../../models/Chart');
const validateChartInput = require('../../validation/chart');

//@route GET current users charts
//@access Private
router.get('/', passport.authenticate('jwt', { session: false}), (req, res) => {
  Chart
    .find({ user: req.user.id })
    .sort({ pairing: 1 })
    .then(charts => res.json(charts))
});

//@route Post api/charts
//@access Private
router.post('/', passport.authenticate('jwt', { session: false}), (req, res) => {
  const { errors, isValid } = validateChartInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }

  Chart.findOne({ $and: [{pairing: req.body.pairing}, {user: req.user.id}]})
    .then((pairing) => {
      if(pairing) {
        errors.pairing = 'Chart already on watchlist';
        return res.status(400).json(errors);
      } else {
        const newChart = new Chart({
          base: req.body.base,
          pair: req.body.pair,
          pairing: req.body.pairing,
          user: req.user.id
        })
        newChart.save().then(chart => res.json(chart));
      }
    })
    
});

router.delete('/:id', (req, res) => {
  Chart.findById(req.params.id)
    .then(chart => chart.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({ success: false }))
})


module.exports = router;