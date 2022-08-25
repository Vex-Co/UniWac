import { Request, Response } from 'express';
import { IStudentModel } from '../interfaces/IStudentModel';
import { Student } from '../models/Student';

export class StudentController {
  static async getAllStudents(req: Request, res: Response) {
    const students = await Student.find(
      {},
      { _id: false, __v: false, password: false }
    ).select('rollNumber name');

    return res.send(students);
  }
  static createStudent(req: Request, res: Response) {
    const name = req.query?.name;
    const rollnumber = req.query?.rollnumber;
    const password = req.query?.password;

    if (name && rollnumber && password) {
      const student = new Student({
        rollNumber: rollnumber,
        name: name,
        password: password,
      });
      student.save();
      return res.send(student);
    } else {
      return res.send({
        error: 'Please give all the information to create new student.',
      });
    }
  }
}
