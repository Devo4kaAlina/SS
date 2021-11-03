import dotenv from 'dotenv';
import express, { Request, Response, Application } from 'express';
import router from './routes';
import { notFound } from './middleware/not-found';

dotenv.config();

const app: Application = express();

app.use(express.static('./public'));
app.use(express.json());

app.use(router);

app.use(notFound);

app.listen(process.env.PORT, () => {
  console.log(`👉 Server is listening on port: ${process.env.PORT}...`);
});
