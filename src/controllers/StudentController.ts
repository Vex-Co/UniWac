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
  static create(req: Request, res: Response) {
    const name = req.query?.name;
    const rollnumber = req.query?.rollnumber;
    const password = req.query?.password;

    // Check if these are passed with the request.
    if (name && rollnumber && password) {
      // Create new user
      const student = new Student({
        rollNumber: rollnumber,
        name: name,
        password: password,
      });
      student.save();

      // Send back newly created student to the client.
      return res.send(student);
    } else {
      // In case there is something missing in that query.
      return res.send({
        error: 'Please give all the information to create new student.',
      });
    }
  }
  static async update(req: Request, res: Response) {
    const id = req.params?.id;
    // Check if id is given
    if (id) {
      const name = req.query?.name;
      const rollNumber = req.query?.rollnumber;
      const password = req.query?.password;
      const updatedStudent: IStudentModel = {};

      if (name) updatedStudent.name = name as string;
      if (rollNumber) updatedStudent.rollNumber = rollNumber as string;
      if (password) updatedStudent.password = password as string;
      try {
        const student = await Student.updateOne({ _id: id }, updatedStudent);
        return res.send('Successfully Updated!');
      } catch (err) {
        return res.send('There is an error while Updating.');
      }
    }
  }
}
