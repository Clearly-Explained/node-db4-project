const router = require('express').Router()
const recipe = require('./recipes-model')

router.get('/:recipe_id', (req, res, next) => {
    recipe.getrecipeById(req.params.recipe_id)
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