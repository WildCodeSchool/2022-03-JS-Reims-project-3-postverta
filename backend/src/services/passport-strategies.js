require("dotenv").config();

const { JWT_SECRET } = process.env;
const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);
