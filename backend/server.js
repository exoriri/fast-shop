const connectDB = require('./database.ts');

/* App configs */
const PORT = process.env.port || 3000;
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'shop';

connectDB(dbUrl, dbName, () => {
    const Koa = require('koa');
    const router = require('./router');

    const app = new Koa();
    
    app
        .use(router.routes())
        .use(router.allowedMethods())

    app.listen(PORT, () => {
        console.log(`Server is running on port ${3000}`)
    });
});