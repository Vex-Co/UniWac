import express from 'express';
import { StudentController } from '../controllers/StudentController';

const router = express.Router();

router.get('/student', StudentController.getAllStudents);
router.post('/student', StudentController.createStudent);

export const studentRouter = router;
