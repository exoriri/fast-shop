/* Vendors */
const passport = require("koa-passport");
const localStrategy = require("passport-local").Strategy;
const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");

/* Application modules */
const UserModel = require("../../models/User");

passport.use(
  "login",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    async (email, password, done) => {
      try {
        const user = await UserModel.find(email);

        if (!user) {
          return done(null, { message: "User not found" });
        }
        const isValid = await UserModel.isValidPassword(password, user.password);

        if (!isValid) {
          return done(null, { message: "Username or password is invalid" });
        }

        return done(null, user, { message: "Logged in successfully" });
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use('jwt', new jwtStrategy(
  {
    secretOrKey: 'top_secret',
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  async (jwt_payload, done) => {
    try {
      return done(null, jwt_payload.user)
    } catch (err) {
      return done(err);
    }
  }
));

