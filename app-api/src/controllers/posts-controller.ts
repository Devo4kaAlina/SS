import { Request, Response } from 'express';
import { DB } from '../db/db-connector';

export const postsController = {
  create: (req: Request, res: Response) => res.status(200).send('POST One post'),
  getAll: async (req: Request, res: Response) => {
    try {
      const sql = 'SELECT * FROM todos';
      const { rows } = await DB.query(sql);

      res.send(rows);
    } catch (error) {
      res.status(500).send('Error in db');
    }
  },

  getById: (req: Request, res: Response) => res.status(200).send('GET One post'),
  updateById: (req: Request, res: Response) => res.status(200).send('PUT One post'),
  deleteById: (req: Request, res: Response) => res.status(200).send('DELETE One post'),
};
