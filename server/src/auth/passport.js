import { User } from '../models';
import localStrategy from './local';
import facebookStrategy from './facebook';

export default function (passport) {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id)
            .then(user => { done(null, user); })
            .catch((err) => { done(err, null); });
    });

    passport.use(localStrategy);
    passport.use(facebookStrategy);
};