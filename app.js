const Koa = require('koa')
const Router = require('koa-router')
const Static = require('koa-static')


const app = new Koa();
const router = new Router()

app.use(Static(__dirname, 'public'));
router.get('/', (ctx) => {
    ctx.body = {
        data: 1234567
    }
})
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(1234)