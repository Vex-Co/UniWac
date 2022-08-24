import express from 'express';
import { StudentController } from '../controllers/controllers';

const router = express.Router();

router.get('/std', StudentController.getAllStudents);
router.post('/std', StudentController.create);

export const studentRouter = router;
