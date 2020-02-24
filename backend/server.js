const connectDb = require('./databases/connectDb.ts');

/* App configs */
const configs = require('./configs');
const { SERVER_PORT, mongo } = configs;
const PORT = process.env.PORT || SERVER_PORT;


connectDb(`${mongo.hostname}/${mongo.port}`, mongo.DB_NAME, (db) => {
    const Koa = require('koa');
    const bodyParser = require('koa-bodyparser');
    const router = require('./router');

    const app = new Koa();

    app.context.db = db;

    require('./controllers/auth/auth.ts');

    app.use(bodyParser());

    app
        .use(router.routes())
        .use(router.allowedMethods())

    app.listen(PORT, () => {
        console.log(`Server is running on port ${3000}`)
    });
});