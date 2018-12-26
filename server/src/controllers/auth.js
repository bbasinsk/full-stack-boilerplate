import passport from 'passport';
import authHelpers from '../auth/authHelpers';

const Auth = {
    login: (req, res, next) => {
        passport.authenticate('local', (err, user) => {
            if (err) {
                return res.status(500).json({ status: 'error' });
            }
            if (!user) {
                return res.status(404).json({ status: 'error' });
            }

            if (user === authHelpers.loginErrors.USER_NOT_FOUND) {
                return res.status(500).json({
                    status: authHelpers.loginErrors.USER_NOT_FOUND
                });
            } else if (user === authHelpers.loginErrors.INCORRECT_PASSWORD) {
                return res.status(500).json({
                    status: authHelpers.loginErrors.INCORRECT_PASSWORD
                });
            }

            req.logIn((loginUser, loginErr) => {
                if (loginErr) {
                    return res.status(500).json({ status: 'error' });
                }
                return res.status(200).json({ status: 'login success' });
            });

            return res.status(500).json({ status: "this shouldn't happen" });
        })(req, res, next);
    },

    register: (req, res, next) =>
        authHelpers
            .createUser(req, res)
            .then(() => {
                passport.authenticate('local', (err, user) => {
                    if (user) {
                        req.logIn((loginUser, loginErr) => {
                            if (loginErr) {
                                res.status(500).json({ status: 'error' });
                            }
                            res.status(200).json({
                                status: 'register success'
                            });
                        });
                    }
                })(req, res, next);
            })
            .catch(err => {
                console.log('Error:', err);
                res.status(500).json({ status: 'error' });
            }),

    facebookLogin: (req, res, next) =>
        passport.authenticate('facebook')(req, res, next),

    facebookVerify: (req, res, next) =>
        passport.authenticate('facebook', {
            failureRedirect: '/api/login',
            successRedirect: '/api/profile'
        })(req, res, next),

    logout: (req, res) => {
        req.logout();
        res.status(200).json({ status: 'logout success' });
    }
};

export default Auth;
