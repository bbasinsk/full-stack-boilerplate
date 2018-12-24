import { Strategy as LocalStrategy } from 'passport-local';
import { User } from '../models/index';
import authHelpers from './authHelpers';

const options = {};

export default new LocalStrategy(options, (username, password, done) => {
    User.findOne({ where: { username: username } })
        .then((user) => {
            if (!user) return done(null, false);
            if (!authHelpers.comparePass(password, user.password)) {
                return done(null, false);
            } else {
                return done(null, user);
            }
        })
        .catch(err => done(err));
});
