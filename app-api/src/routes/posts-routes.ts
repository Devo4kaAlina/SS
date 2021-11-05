import express from 'express';
import { postsController } from '../controllers/posts-controller';

export const POSTS_ROUTE = '/posts';

const router = express.Router();

router.route('/').get(postsController.getAll).post(postsController.create);
router.route('/:id').get(postsController.getById).put(postsController.updateById).delete(postsController.deleteById);

export default router;
