/* Vendors */
const Router = require("koa-router");
const passport = require("koa-passport");
const graphqlHTTP = require('koa-graphql');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Product = require('./models/Product');
const User = require('./models/User');

const Schema = require('./schema');

const router = new Router();

const salt = 10;

router.all('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true
}))

router.get("/products", async ctx => {
  const products = await Product.get();
  ctx.body = { items: products };
});

router.post(
  "/signup",
  async (ctx, next) => {
    const { firstName, lastName, email, password } = ctx.request.body;
    try {
      const hash = await bcrypt.hash(password, salt);
      const user = await User.create({firstName, lastName, email, password: hash });

      if (typeof user === 'string') {
        throw new Error(user);
      } else {
        ctx.response.status = 200;
        ctx.type = 'application/json; charset=utf-8';
        ctx.body = {
          message: 'Пользователь успешно создан'
        };
        next();
      }
    } catch (err) {
      ctx.response.status = 400;
      ctx.body = {
        message: err.message
      }
    }
  }
);

router.post('/login', async (ctx, next) => {
 await passport.authenticate('login', (err, user) => {
    if (err || !user) {
      ctx.response.status = 400;
      ctx.body = {
        message: 'An Error occured'
      }
      console.log('Hey, here an error')
    } else {
      const body = { _id: user.id, email: user.email };

      const token = jwt.sign({ user: body }, 'top_secret');

      ctx.body = { token };
    }
  })(ctx, next);
});

module.exports = router;
