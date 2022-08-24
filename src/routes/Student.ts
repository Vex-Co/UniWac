import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/std', (req: Request, res: Response) => {
  return res.send('Student');
});

export const studentRouter = router;
