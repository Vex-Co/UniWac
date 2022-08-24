import express from 'express';
import { StudentController } from '../controllers/controllers';

const router = express.Router();

router.get('/student', StudentController.getAllStudents);
router.post('/student', StudentController.createStudent);

export const studentRouter = router;
