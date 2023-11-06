// routes/studentRoutes.js
import express from 'express';
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/StudentController.js';

const studentRoutes = express.Router();

// Get all students
studentRoutes.get('/students', getAllStudents);

// Get a single student by ID
studentRoutes.get('/students/:id', getStudentById);

// Create a new student
studentRoutes.post('/students', createStudent);

// Update a student by ID
studentRoutes.put('/students/:id', updateStudent);

// Delete a student by ID
studentRoutes.delete('/students/:id', deleteStudent);

export default studentRoutes;
