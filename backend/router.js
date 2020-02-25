/* Vendors */
const Router = require("koa-router");
const passport = require("koa-passport");
const jwt = require("jsonwebtoken");

const router = new Router();

router.get("/", async ctx => {
  ctx.body = "Hello friend";
});

router.post(
  "/signup",
  async (ctx, next) => {
    passport.authenticate("signup", { session: false }, async (err, res) => {
      if (err) throw Error(err);
      const userOrMessage = await res;
      if (typeof userOrMessage === 'string') {
        ctx.response.status = 303;
        ctx.body = {
          message: userOrMessage
        }
      } else {
        ctx.response.status = 200;
        ctx.body = {
          message: 'Пользователь успешно создан'
        };
        console.log('Пользователь успешно создан');
        next();
      }
    })(ctx, next)
  }
);

router.post('/login', async (ctx, next) => {
  passport.authenticate('login', (err, user, info) => {
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
