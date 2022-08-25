import express from 'express';
import { StudentController } from '../controllers/StudentController';

const router = express.Router();

router.get('/student', StudentController.getAllStudents);
router.post('/student', StudentController.create);
router.put('/student/:id', StudentController.update);
router.delete('/student/:id', StudentController.create);

export const studentRouter = router;
