import { Router } from 'express';
import auth from '../controllers/auth';
import authHelpers from '../auth/authHelpers';

const router = new Router();

// LOCAL AUTHENTICATION ===============================================================================================

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
router.post('/register', authHelpers.loginRedirect, auth.register);

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
router.post('/login', authHelpers.loginRedirect, auth.login);

// FACEBOOK AUTHENTICATION ===============================================================================================
/**
 * @api {get} /api/login/facebook Facebook Login
 * @apiName Facebook Login
 * @apiGroup Auth
 */
router.get('/login/facebook', authHelpers.loginRedirect, auth.facebookLogin);

/**
 * @api {get} /api/login/facebook/callback Facebook Login Verify
 * @apiName Facebook Login Verify
 * @apiGroup Auth
 */
router.get('/auth/facebook/callback', auth.facebookVerify);

// END SESSION ===============================================================================================

/**
 * @api {get} /api/logout Logout
 * @apiName Logout
 * @apiGroup Auth
 *
 * @apiSuccess {String} status Status of the request.
 */
router.get('/logout', authHelpers.loginRequired, auth.logout);

export default router;