import passport from 'passport';
import authHelpers from '../auth/authHelpers';

const Auth = {
    login: (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) {
                return res.status(500).json({ status: 'error' });
            }
            if (!user) {
                res.status(404).json({ status: 'error' });
            }

            if (user == authHelpers.loginErrors['USER_NOT_FOUND']) {
                res.status(500).json({ status: authHelpers.loginErrors['USER_NOT_FOUND'] });
            }
            else if (user == authHelpers.loginErrors['INCORRECT_PASSWORD']) {
                res.status(500).json({ status: authHelpers.loginErrors['INCORRECT_PASSWORD'] });
            }
            else {
                req.logIn(user, function (err) {
                    if (err) {
                        res.status(500).json({ status: 'error' });
                    }
                    res.status(200).json({ status: 'login success' });
                });
            }
        })(req, res, next);
    },

    register: (req, res, next) => {
        return authHelpers.createUser(req, res)
            .then(response => {
                passport.authenticate('local', (err, user, info) => {
                    if (user) {
                        req.logIn(user, function (err) {
                            if (err) {
                                res.status(500).json({ status: 'error' });
                            }
                            res.status(200).json({ status: 'register success' });
                        });
                    }
                })(req, res, next);
            })
            .catch((err) => {
                console.log('Error:', err);
                res.status(500).json({ status: 'error' });
            });
    },

    logout: (req, res) => {
        req.logout();
        res.status(200).json({ status: 'logout success' });
    }
};

export default Auth;
