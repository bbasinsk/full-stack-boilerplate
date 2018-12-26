import { Strategy as FacebookStrategy } from 'passport-facebook';
import { User } from '../models';

const options = {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_SECRET_ID,
    callbackURL: '/api/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'emails', 'photos']
};

export default new FacebookStrategy(options, (accessToken, refreshToken, profile, done) => {
    return User.findOrCreate({
        where: { facebookId: profile.id }
    })
        .then(user => done(null, user[0]))
        .catch(err => done(err));
});