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

async function loadingPageAction(ctx){
    if(!ctx.cookies.get('access_token')){
        try {
            await auth(ctx.query.access_token);
        }catch (e) {
            console.log(e);
            const viewVariables = {
                message: 'Failed to login, please try again!'
            };
            ctx.status = 302;
            await ctx.redirect('/', viewVariables)
        }
        await ctx.cookies.set('access_token', ctx.query.access_token, {httpOnly: false});
    }
    ctx.status = 302;
    await ctx.redirect('/schedule');
}

async function schedulePageAction(ctx) {
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

async function logOut(ctx){
    ctx.cookies.set('access_token', null);
    ctx.status = 302;
    ctx.redirect('/');
}

module.exports = {errorPageAction, homePageAction, loadingPageAction, schedulePageAction, logOut};
