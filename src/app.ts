import express, { Request, Response } from 'express';
import { studentRouter } from './routes/Student';

const app = express();
app.use(studentRouter);

app.listen(3000);
