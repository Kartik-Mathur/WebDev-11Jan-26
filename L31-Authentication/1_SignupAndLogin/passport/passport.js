const passport = require('passport');
const LocalStrategy = require('passport-local');
const UserModel = require('../models/User.model');
const bcrypt = require('bcrypt');

passport.serializeUser(function (user, done) {
    done(null, user._id.toString());
});

passport.deserializeUser(async function (_id, done) {
    try {
        let user = await UserModel.findOne({
            _id
        });

        done(null, user);
    } catch (error) {
        done(error);
    }
});

passport.use(new LocalStrategy(
    async function (username, password, done) {
        try {
            let user = await UserModel.findOne({
                username
            })

            if (!user) { return done(null, false); }

            bcrypt.compare(password, user.password).then(function (result) {
                if (result == false) {
                    return done(null, false);
                }

                done(null, user);
            });
        } catch (error) {
            done(error);
        }
    }
));

module.exports = passport;