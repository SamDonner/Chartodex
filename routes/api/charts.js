const express = require('express');
const router = express.Router();

const Chart = require('../../models/Chart');

//@route GET api/charts
router.get('/', (req, res) => {
  Chart
    .find()
    .sort({ pairing: 1 })
    .then(charts => res.json(charts))
});

router.post('/', (req, res) => {
  const newChart = new Chart({
    base: req.body.base,
    pair: req.body.pair,
    pairing: req.body.pairing
  })

  newChart.save().then(chart => res.json(chart));
});

router.delete('/:id', (req, res) => {
  Chart.findById(req.params.id)
    .then(chart => chart.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({ success: false }))
})


module.exports = router;