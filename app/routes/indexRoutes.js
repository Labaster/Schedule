const {errorPageAction, homePageAction, loadingPageAction, schedulePageAction} = require('../controllers/indexController');

module.exports = function (router) {
    router
        .get('/', homePageAction)
        .get('/loading', loadingPageAction)
        .get('/schedule*', schedulePageAction)
        .get('**', errorPageAction);
};
