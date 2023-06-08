const User = require('./models/userModel');
const passport=require("passport")


const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    const email = profile.emails[0].value; // assuming the email is in the first index of the array
    // console.log(profile[0])
    // Check if the email exists in the database
    User.findOne({ email: email })
      .then((user) => {
        if (!user) { // email doesn't exist in the database
          return done(null, false, { message: 'Email not found in database' });
        }
  
        // email exists in the database
        return done(null, user);
      })
      .catch((err) => {
        return done(err);
      });
  }));


passport.serializeUser(function(user,done){
    done(null, user)
})

passport.deserializeUser(function(user,done){
    done(null, user)
})