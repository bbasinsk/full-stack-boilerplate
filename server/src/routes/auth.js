import { Router } from 'express';
import auth from '../controllers/auth';
import authHelpers from '../auth/authHelpers';

const router = new Router();

router.post('/register', authHelpers.loginRedirect, (req, res, next) => auth.register(req, res, next));
router.post('/login', authHelpers.loginRedirect, (req, res, next) => auth.login(req, res, next));
router.get('/logout', authHelpers.loginRequired, (req, res) => auth.logout(req, res));

export default router;