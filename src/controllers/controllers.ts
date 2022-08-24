import { Request, Response } from 'express';
import { IStudentModel } from '../interfaces/IStudentModel';
import { Student } from '../models/Student';

export class StudentController {
  static getAllStudents(req: Request, res: Response) {
    return res.send(JSON.stringify('as'));
  }
  static create(req: Request, res: Response) {
    const student = StudentController.createStudent({
      rollNumber: 'Fall-2020-BSCS-022',
      name: 'Zafeer',
      password: '123456789',
    });

    return res.send(JSON.stringify(student));
  }
  private static createStudent(studentInfo: IStudentModel) {
    const student = new Student(studentInfo);

    student.save();

    return student;
  }
}
