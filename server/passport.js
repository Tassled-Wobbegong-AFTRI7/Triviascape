const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;



passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


passport.use(new GoogleStrategy({
    clientID: '187957669325-3o5sdku5a8tmno6koq6lfjs1ae25msv5.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost/3000/google/auth',
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
))


module.exports = passport;

