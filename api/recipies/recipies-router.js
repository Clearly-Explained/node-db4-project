const router = require('express').Router()

router.use('*', (req, res, next) => {
    res.json({api: 'up'})
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Finding the real error is 90% of the bug fix',
      message: err.message,
      stack: err.stack,
    })
  })
  
  module.exports = router