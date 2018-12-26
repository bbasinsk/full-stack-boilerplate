import { Router } from 'express';
import user from '../controllers/users';
import authHelpers from '../auth/authHelpers';

const router = new Router();

router.get('/profile', authHelpers.loginRequired, (req, res, next) =>
    user.profile(req, res, next)
);

export default router;
