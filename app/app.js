const Koa = require('koa');
const app = new Koa();
const render = require('koa-ejs');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const serve = require('koa-static');
const mount = require('koa-mount');
const koaqs = require('koa-qs');
const grant = require('grant-koa');
const session = require('koa-session');
const config = require('config');
const fbIdSecret = config.get('server.fb');
const routes = require('./routes/index');
const Knex = require('knex');
const knexConfig = require('../config/knexfile');
const { Model } = require('objection');

// Initialize knex.
const knex = Knex(knexConfig.development);

Model.knex(knex);


render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'template',
    viewExt: 'html',
});

app.keys = ['grant'];

app
    .use(bodyParser())
    .use(session(app))
    .use(mount(grant(fbIdSecret)))
    .use(mount('/public', serve('./public')))
    .use(routes);
koaqs(app);

const port = 3000;
const server = app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});

module.exports = { app, server };

