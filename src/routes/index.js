const router = require('express').Router();

const apiRoutes = require('./api');
const webRoutes = require('./web')

router.use(apiRoutes);
// router.use(webRoutes);

module.exports = router;