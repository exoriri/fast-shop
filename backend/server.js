const Koa = require('koa');

const router = require('./router');

const app = new Koa();

const PORT = process.env.port || 3000;

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(PORT, () => {
    console.log(`Server is running on port ${3000}`)
});