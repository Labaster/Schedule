const {auth} = require('./auth');
const setCookies = require('../helpers/cookiesHelper');

async function getUser(ctx) {
    setCookies(ctx);
    let user = await auth(ctx.cookies.get('access_token'));
    if(user[1].hasOwnProperty("error")) {
        ctx.status = 401;
        ctx.body = "Authentication failed!";
    }else{
    ctx.status = 200;
    ctx.body = await JSON.stringify(user[1]);
    }
}

module.exports = { getUser };
