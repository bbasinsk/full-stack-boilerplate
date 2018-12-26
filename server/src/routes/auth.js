import { Router } from 'express';
import auth from '../controllers/auth';
import authHelpers from '../auth/authHelpers';

const router = new Router();

/**
 * @api {post} /api/register Register
 * @apiName Register
 * @apiGroup Auth
 *
 * @apiParam {String} username Username of new user
 * @apiParam {String} password Password of new user
 *
 * @apiSuccess {String} status Status of the request.
 */
router.post('/register', authHelpers.loginRedirect, (req, res, next) => auth.register(req, res, next));

/**
 * @api {post} /api/login Login
 * @apiName Login
 * @apiGroup Auth
 *
 * @apiParam {String} username Username of new user
 * @apiParam {String} password Password of new user
 *
 * @apiSuccess {String} status Status of the request.
 */
router.post('/login', authHelpers.loginRedirect, (req, res, next) => auth.login(req, res, next));

/**
 * @api {get} /api/logout Logout
 * @apiName Logout
 * @apiGroup Auth
 *
 * @apiSuccess {String} status Status of the request.
 */
router.get('/logout', authHelpers.loginRequired, (req, res) => auth.logout(req, res));

export default router;