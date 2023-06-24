import { Router } from 'express';

import * as commentController from '../controllers/comments';
import { verifyToken } from '../middleware/tokenValidator';

const router = Router();

/**
 * POST /comment/post-comment
 */
router.post('/post-comment', verifyToken, commentController.postComment);

/**
 * POST /comment/edit-comment
 */
router.post('/edit-comment', verifyToken, commentController.editComment);

/**
 * GET /comment/delete-comment
 */
router.get('/delete-comment', verifyToken, commentController.deleteComment);


export default router;