import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  return res.send('Home Page');
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
