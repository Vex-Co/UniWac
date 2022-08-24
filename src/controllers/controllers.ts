import { Request, Response } from 'express';
import { IStudentModel } from '../interfaces/IStudentModel';
import { Student } from '../models/Student';

export class StudentController {
  static async getAllStudents(req: Request, res: Response) {
    const student = await Student.find();

    return res.send(student);
  }
  static create(req: Request, res: Response) {
    const student = new Student({
      rollNumber: 'Fall-2020-BSCS-022',
      name: 'Zafeer',
      password: '123456789',
    });
    student.save();

    return res.send(JSON.stringify(student));
  }
}
