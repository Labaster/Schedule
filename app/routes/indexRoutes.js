const {errorPageAction, homePageAction, loadingPageAction, schedulePageAction, logOut} = require('../controllers/indexController');

module.exports = function (router) {
    router
        .get('/', homePageAction)
        .get('/loading', loadingPageAction)
        .get('/schedule*', schedulePageAction)
        .get('/logout', logOut)
        .get('**', errorPageAction);
};
