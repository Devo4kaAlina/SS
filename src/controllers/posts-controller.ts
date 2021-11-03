import { Request, Response } from 'express';

export const postsController = {
  create: (req: Request, res: Response) => res.status(200).send('POST One post'),
  getAll: (req: Request, res: Response) => res.status(200).send('GET All posts'),

  getById: (req: Request, res: Response) => res.status(200).send('GET One post'),
  updateById: (req: Request, res: Response) => res.status(200).send('PUT One post'),
  deleteById: (req: Request, res: Response) => res.status(200).send('DELETE One post'),
};
