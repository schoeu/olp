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
const bodyParser = require('koa-bodyparser');

const config = require('./config/app')
const utils = require('./utils/util')
const getTags = require('./actions/gettags');
const pushCode = require('./actions/push');

const app = new Koa();
const router = new Router();
app.use(static(path.join(__dirname, 'public')));
app.use(bodyParser());

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
    ctx.render("main");
});

// 上线逻辑
router.post('/api/sync', async function (ctx, next) {
    let body = ctx.request.body || {};
    let ips = body.ips || '';
    let path = body.path || '';
    let out = await pushCode(ips, path);
    ctx.body = out.stdout.trim();
});

// 获取可上线分支
router.get('/api/tags', async function (ctx, next) {
    let tags = await getTags()
    ctx.body = {data: tags || []};
});

let port = config.port || 8910;
let ip = utils.getIp();

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);
console.log(`server listening on http://${ip}:${port}`);
