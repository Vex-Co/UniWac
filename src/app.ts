import express, { Request, Response } from 'express';
import { Student } from './models/Student';

const app = express();

app.post('/', (req: Request, res: Response) => {
  return res.send('Home Page');
});

app.listen(3000);
