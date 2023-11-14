import Teacher from '../models/Teacher.js';
import Student from '../models/Student.js';

// Controller functions for Admin

// Add a new student
export const addStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remove a student by ID
export const removeStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student removed successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add a new teacher
export const addTeacher = async (req, res) => {
  try {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).json(teacher);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remove a teacher by ID
export const removeTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(200).json({ message: 'Teacher removed successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
