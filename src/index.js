const serve = require('koa-static');
const Koa = require('koa');
const path = require('path');

const app = new Koa();

const STATIC_ROOT_PATH = path.join(process.cwd(), 'client', 'build');

console.log(STATIC_ROOT_PATH)

// 启动静态服务
app.use(serve(STATIC_ROOT_PATH));

// // response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });

app.listen(3000);