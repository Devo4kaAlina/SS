import express from 'express';
import postsRoutes, { POSTS_ROUTE } from './posts-routes';

const router = express.Router();

router.use(POSTS_ROUTE, postsRoutes);

export default router;
