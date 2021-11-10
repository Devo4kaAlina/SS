import express from 'express';
import { usersController } from '../controllers';

export const USERS_ROUTE = '/users';

const router = express.Router();

router.route('/').get(usersController.getAllUsers).post(usersController.createUser);
router.route('/:id').get(usersController.getUser);

export default router;
