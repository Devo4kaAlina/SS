import express from 'express';
import postsRoutes, { POSTS_ROUTE } from './posts-routes';
import usersRoutes, { USERS_ROUTE } from './users-routes';

const router = express.Router();

router.use(POSTS_ROUTE, postsRoutes);
router.use(USERS_ROUTE, usersRoutes);

export default router;
