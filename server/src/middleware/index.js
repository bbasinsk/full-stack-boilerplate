import { Router } from 'express';
import passport from 'passport';
import session from 'express-session';
import passportConfig from '../auth/passport';

export default ({ config, db }) => {
    const app = Router();

    // passport for auth
    app.use(
        session({
            secret: process.env.SECRET_KEY,
            resave: false,
            saveUninitialized: true
        })
    );
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    passportConfig(passport); // Load passport config

    return app;
};
