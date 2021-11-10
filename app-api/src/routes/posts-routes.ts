import express from 'express';
import { postsController } from '../controllers';

export const POSTS_ROUTE = '/posts';

const router = express.Router();

router.route('/').get(postsController.getAllPosts).post(postsController.createPost);
router.route('/:id').get(postsController.getPost).put(postsController.updatePost).delete(postsController.deletePost);

export default router;
