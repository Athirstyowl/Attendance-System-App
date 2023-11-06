// routes/adminRoutes.js
import express from 'express';
import {
  addStudent,
  removeStudent,
  addTeacher,
  removeTeacher,
} from '../controllers/AdminController.js';

const adminRoutes = express.Router();

// Add a new student
adminRoutes.post('/admin/students', addStudent);

// Remove a student by ID
adminRoutes.delete('/admin/students/:id', removeStudent);

// Add a new teacher
adminRoutes.post('/admin/teachers', addTeacher);

// Remove a teacher by ID
adminRoutes.delete('/admin/teachers/:id', removeTeacher);

export default adminRoutes;
