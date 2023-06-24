import { Router } from 'express';

import * as postController from '../controllers/posts';
import { verifyToken } from '../middleware/tokenValidator';

const router = Router();

/**
 * POST /posts/create-post
 */
router.post('/create-posts', verifyToken, postController.createPost);

/**
 * POST /posts/edit-post
 */
router.post('/edit-post', verifyToken, postController.editPost);

/**
 * GET /posts/view-posts
 */
router.get('/view-posts', verifyToken, postController.viewPosts);

/**
 * GET /posts/post
 */
router.get('/post', verifyToken, postController.post);

/**
 * PUT /posts/delete-post
 */
router.put('/delete-post', verifyToken, postController.deletePost)

export default router;