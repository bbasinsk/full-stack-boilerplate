import bcrypt from 'bcryptjs';
import { User } from '../models';

function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
}

function createUser(req) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);

    return User.create({
        username: req.body.username,
        password: hash
    });
}

function loginRequired(req, res, next) {
    if (!req.user) return res.status(401).json({ status: 'Please log in' });
    return next();
}

function loginRedirect(req, res, next) {
    if (req.user)
        return res.status(401).json({ status: 'You are already logged in' });
    return next();
}

const loginErrors = {
    USER_NOT_FOUND: 'User not found',
    INCORRECT_PASSWORD: 'Incorrect Password'
};

export default {
    comparePass,
    createUser,
    loginRequired,
    loginRedirect,
    loginErrors
};
