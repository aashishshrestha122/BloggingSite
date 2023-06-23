import { Router } from 'express';

import * as authController from '../controllers/auth';
import { verifyRefreshToken, verifyToken } from '../middleware/tokenValidator';

const router = Router();

/**
 * POST /auth/create-user
 */
router.post('/create-user', authController.createUser);

/**
 * POST /auth/login
 */
router.post('/login', authController.login);

/**
 * POST /auth/refresh-token
 */
router.post('/refresh-token', verifyRefreshToken, authController.refreshToken);

export default router;