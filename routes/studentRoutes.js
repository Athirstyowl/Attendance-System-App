// routes/studentRoutes.js
import express from 'express';
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/StudentController';

const router = express.Router();

// Get all students
router.get('/students', getAllStudents);

// Get a single student by ID
router.get('/students/:id', getStudentById);

// Create a new student
router.post('/students', createStudent);

// Update a student by ID
router.put('/students/:id', updateStudent);

// Delete a student by ID
router.delete('/students/:id', deleteStudent);

export default router;
