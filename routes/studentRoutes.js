// routes/studentRoutes.js
import express from 'express';
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from '../controllers/StudentController.js';
import {verifyToken} from '../middlewares/authMiddleware.js';

const studentRoutes = express.Router();

// Get all students
studentRoutes.get('/students',verifyToken, getAllStudents);

// Get a single student by ID
studentRoutes.get('/students/:id',verifyToken, getStudentById);

// Create a new student
studentRoutes.post('/students',verifyToken, createStudent);

// Update a student by ID
studentRoutes.put('/students/:id',verifyToken, updateStudent);

// Delete a student by ID
studentRoutes.delete('/students/:id',verifyToken, deleteStudent);

export default studentRoutes;
