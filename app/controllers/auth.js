const request = require('request');
const promise = require('bluebird');
const purest = require('purest')({request, promise});
const config = require('@purest/providers');
const facebook = purest({provider: 'facebook', config});

async function auth(token) {
    return await facebook
        .get('me?fields=first_name, last_name, birthday, email, picture')
        .auth(token)
        .request();
}

module.exports={auth};
