// routes/adminRoutes.js
import express from 'express';
import {
  addStudent,
  removeStudent,
  addTeacher,
  removeTeacher,
} from '../controllers/AdminController';

const router = express.Router();

// Add a new student
router.post('/admin/students', addStudent);

// Remove a student by ID
router.delete('/admin/students/:id', removeStudent);

// Add a new teacher
router.post('/admin/teachers', addTeacher);

// Remove a teacher by ID
router.delete('/admin/teachers/:id', removeTeacher);

export default router;
