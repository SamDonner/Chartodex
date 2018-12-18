const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Coin = require('../../models/Portfolio');
const validatePortfolioInput = require('../../validation/portfolio');
const helpers = require('./helpers')

// @route  GET api/portfolio/
// @desc   Tests post route
// @access public



router.get('/', passport.authenticate('jwt', { session: false}), (req, res) => {
  
  Coin 
    .find({ user: req.user.id })
    .sort({ coin: 1 })
    .then(coin => {
      return helpers.getQuotes(coin) 
    })
    .then(data => res.json(data))
});



router.post('/', passport.authenticate('jwt', { session: false}), (req, res) => {
  const { errors, isValid } = validatePortfolioInput(req.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }

  Coin.findOne({ $and: [{coin: req.body.coin}, {user: req.user.id}]})
    .then((coin) => {
      if(coin) {
        errors.coin = 'Coin already in portfolio';
        return res.status(400).json(errors);
      } else {
        const newCoin = new Coin({
          coin: req.body.coin,
          holdings: req.body.holdings,
          user: req.user.id
        })
        newCoin.save().then(coin => res.json(coin));
      }
    })
    
  });

  router.delete('/:id', (req, res) => {
    Coin.findById(req.params.id)
      .then(coin => coin.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({ success: false }))
  })


module.exports = router;