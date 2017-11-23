/**
 * @file index.js
 * @description olp主入口文件
 * @author schoeu
*/
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const Pug = require('koa-pug')
const static = require('koa-static');

const config = require('./config/app')
const utils = require('./utils/util')

const app = new Koa();
const router = new Router();
app.use(static(path.join(__dirname, 'public')));

let debug = false;
if (process.env.NODE_ENV === 'development') {
    debug = true
}

const pug = new Pug({
    viewPath: path.join(__dirname, './views'),
    debug: debug,
    pretty: false,
    compileDebug: debug,
    app: app
  })

router.get('/', function (ctx, next) {
    console.log(process.cwd());
    ctx.render("main");
});

let port = config.port || 8910;
let ip = utils.getIp();

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);
console.log(`server listening on http://${ip}:${port}`);
