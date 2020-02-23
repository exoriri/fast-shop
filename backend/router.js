const Router = require('koa-router');

const User = require('./models/Users.ts');

const router = new Router();

router.get('/', async ctx => {
    ctx.body = 'Hello friend';
});

module.exports = router;