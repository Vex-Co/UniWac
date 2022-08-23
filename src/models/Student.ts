import { mongoose } from '../config/mongoose';

const UserSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

export const Student = mongoose.model('Student', UserSchema);
