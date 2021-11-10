import { Request, Response } from 'express';
import { DB } from '../../db/db-connector';
import { CreateUserBody, UserParams } from './types';

export const usersController = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const { rows } = await DB.query('SELECT * from users');

      res.status(200).json(rows);
    } catch (error) {
      res.status(500).end(error);
    }
  },

  createUser: async (req: Request<{}, {}, CreateUserBody>, res: Response) => {
    try {
      const { firstName, lastName } = req.body;

      const sql = `INSERT INTO users (first_name, last_name) VALUES($1, $2)`;
      await DB.query(sql, [firstName, lastName]);

      res.status(200).end();
    } catch (error) {
      res.status(500).end(error);
    }
  },

  getUser: async (req: Request<UserParams>, res: Response) => {
    try {
      const { id } = req.params;

      const sql = `SELECT first_name, last_name FROM users WHERE id=${id}`;
      const {
        rows: [user],
      } = await DB.query(sql);

      if (!user) return res.status(404).send('User not found');

      res.status(200).json(user);
    } catch (error) {
      res.status(500).end(error);
    }
  },
};
