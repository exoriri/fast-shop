/* Vendors */
const passport = require('koa-passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

/* Application modules */
const databases = require('../../databases');
const UserModel = require('../../models/User');

const db = databases.Mongo.db;
const salt = 10;

passport.use('signup', new localStrategy({
  usernameField : 'email',
  passwordField : 'password'
}, async (email, password, done) => {
    try {
        const hash = await bcrypt.hash(password, salt);
        const user = UserModel.create({ email, password: hash, db });
        return done(null, user);
    }
    catch (err) {
        return done(err);
    }
}));