/* Vendors */
const passport = require('koa-passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const mongoClient = require('mongodb').Db;
const UserModel = require('../../models/User.ts');
const salt = 10;

console.log(mongoClient)

passport.use('signup', new localStrategy({
  usernameField : 'email',
  passwordField : 'password'
}, async (email, password, done) => {
    try {
        // const hash = await bcrypt.hash(password, salt);
        // User.create({ email, password: hash });
        return done(null, {hash: 'asdfasf'});
    }
    catch (err) {
        console.log('asdf', err)
        return done(err);
    }
}));