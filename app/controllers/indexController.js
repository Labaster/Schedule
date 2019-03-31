const fs = require('fs');
const path = require('path');
const {auth} = require('./auth');


async function homePageAction(ctx) {
    const viewVariables = {
        link:'/connect/facebook'
    };
        ctx.status = 200;
        await ctx.render('mainPage', viewVariables);
}

async function schedulePageAction(ctx) {
    if(!ctx.cookies.get('access_token')){
        try {
            await auth(ctx.query.access_token);
        }catch (e) {
            console.log(e);
            const viewVariables = {
                errorCode: '401 Authentication failed!',
                errorMessage: 'Sorry, an error has occurred, authentication server is not response!',
            };
            await ctx.render('errorPage', viewVariables);
        }
        await ctx.cookies.set('access_token', ctx.query.access_token, {httpOnly: false});
    }
        ctx.status = 200;
        ctx.body = await fs.readFileSync(path.resolve(path.join('./public/build', 'index.html')), 'utf8');
}

async function errorPageAction(ctx) {
    const viewVariables = {
        errorCode: '404 Page Not Found',
        errorMessage: 'Sorry, an error has occurred, Requested page not found!',
    };
    ctx.status = 404;
    await ctx.render('errorPage', viewVariables);
}

module.exports = {errorPageAction, homePageAction, schedulePageAction};
