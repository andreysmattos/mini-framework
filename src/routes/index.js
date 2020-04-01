const router = require('express').Router()

const apiRoutes = require('./api')
// const webRoutes = require('./web')

router.use(apiRoutes)
// router.use(webRoutes);

// Route default
router.use(function (req, res, next) {
  const error = new Error('Não encontrado')
  error.status = 404
  next(error)
})

module.exports = router
