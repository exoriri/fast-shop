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

module.exports = router;
