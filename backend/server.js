/* Vendorss */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

/* Application modules */
const databases = require('./databases');
const { connectMongoDB } = databases.Mongo;

/* App configs */
const configs = require('./configs');
const { SERVER_PORT, mongo } = configs;
const PORT = process.env.PORT || SERVER_PORT;
const MONGO_URI = process.env.MONGODB_URI `${mongo.hostname}/${mongo.port}`;

connectMongoDB(MONGO_URI, mongo.DB_NAME, (db) => {
    // Router declares here because there is models which depends on db connection
    const router = require('./router');

    const app = new Koa();
    app.context.db = db;

    require('./controllers/auth/auth.js');

    app.use(bodyParser());
    app.use(cors());
    app
        .use(router.routes())
        .use(router.allowedMethods())
    app.listen(PORT, () => {
        console.log(`Server is running on port ${3000}`)
    });
});