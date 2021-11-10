import { Request, Response } from 'express';
import { DB } from '../../db/db-connector';
import { CreatePostBody, GetAllPostsQuery, PostParams } from './types';

export const postsController = {
  getAllPosts: async (req: Request<{}, {}, {}, GetAllPostsQuery>, res: Response) => {
    try {
      const { pageNumber = '1', pageSize = '3', orderBy = 'title', isAscending = 'true' } = req.query;

      const direction = isAscending === 'true' ? '' : 'DESC';
      const offset = Number(pageNumber) > 1 ? `OFFSET ${Number(pageSize) * (Number(pageNumber) - 1)}` : '';
      const sql = `SELECT * FROM posts ORDER BY ${orderBy} ${direction} LIMIT ${pageSize} ${offset}`;

      const { rows } = await DB.query(sql);

      res.send(rows);
    } catch (error) {
      res.status(500).end(error);
    }
  },

  createPost: async (req: Request<{}, {}, CreatePostBody>, res: Response) => {
    try {
      const { title, content } = req.body;

      if (!title || !content) return res.status(400).send('Please provide title and content');

      const sql = 'INSERT INTO posts (title, content) VALUES ($1, $2)';
      await DB.query(sql, [title, content]);

      res.status(200).end();
    } catch (error) {
      res.status(500).end(error);
    }
  },

  getPost: async (req: Request<PostParams>, res: Response) => {
    try {
      const sql = `SELECT id, title, content FROM posts WHERE id=${req.params.id}`;
      const {
        rows: [post],
      } = await DB.query(sql);

      if (post) return res.status(200).json(post);

      res.status(404).send('Post not found');
    } catch (error) {
      res.status(500).end(error);
    }
  },

  updatePost: async (req: Request<PostParams, {}, CreatePostBody>, res: Response) => {
    try {
      const { id } = req.params;
      const { title, content } = req.body;

      if (!title || !content) return res.status(400).send('Please provide title and content');

      const sql = `UPDATE posts SET title='${title}', content='${content}' WHERE id=${id} `;
      await DB.query(sql);

      res.status(200).end();
    } catch (error) {
      res.status(500).end(error);
    }
  },

  deletePost: async (req: Request<PostParams>, res: Response) => {
    try {
      const { id } = req.params;

      const sql = `DELETE FROM posts WHERE id=${id} `;
      await DB.query(sql);

      res.status(200).end();
    } catch (error) {
      res.status(500).end(error);
    }
  },
};
