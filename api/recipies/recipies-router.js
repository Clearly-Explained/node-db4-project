const router = require('express').Router()
const Recipie = require('./recipies-model')

router.get('/:recipie_id', (req, res, next) => {
    Recipie.getRecipieById(req.params.recipie_id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Finding the real error is 90% of the bug fix',
      message: err.message,
      stack: err.stack,
    })
  })
  
  module.exports = router