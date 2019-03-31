const {errorPageAction, homePageAction, schedulePageAction} = require('../controllers/indexController');

module.exports = function (router) {
    router
        .get('/', homePageAction)
        .get('/schedule*', schedulePageAction)
        .get('**', errorPageAction);
};
