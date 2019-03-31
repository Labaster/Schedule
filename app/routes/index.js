const router = require('koa-router')();
const indexRoutes = require('./indexRoutes');
const apiRoutes = require('./apiRoutes');

apiRoutes(router);
indexRoutes(router);

module.exports = router.routes();