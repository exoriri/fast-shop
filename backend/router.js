const Router = require("koa-router");
const passport = require("koa-passport");
const jwt = require("jsonwebtoken");

const User = require("./models/User.ts");

const router = new Router();

router.get("/", async ctx => {
  ctx.body = "Hello friend";
});

router.post(
  "/signup",
  async (ctx, next) => {
    passport.authenticate("signup", { session: false })(ctx, next)
  }
);

module.exports = router;
