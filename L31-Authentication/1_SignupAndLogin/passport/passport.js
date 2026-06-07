const passport = require('passport');

passport.serializeUser(function (user, done) {
    done(null, user._id);
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


module.exports = passport;