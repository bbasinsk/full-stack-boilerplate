import { Strategy as LocalStrategy } from 'passport-local';
import { User } from '../models/index';
import authHelpers from './authHelpers';

const options = {};

export default new LocalStrategy(options, (username, password, done) => {
    console.log('logging in:', username);
    User.findOne({ where: { username: username } })
        .then(user => {
            if (!user) return done(null, authHelpers.loginErrors.USER_NOT_FOUND);
            if (!authHelpers.comparePass(password, user.password)) {
                return done(null, authHelpers.loginErrors.INCORRECT_PASSWORD);
            } else {
                return done(null, user);
            }
        })
        .catch(err => done(err));
});
