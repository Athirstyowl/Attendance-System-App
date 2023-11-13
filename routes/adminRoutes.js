// routes/adminRoutes.js
import express from 'express';
import {
  addStudent,
  removeStudent,
  addTeacher,
  removeTeacher,
} from '../controllers/AdminController.js';
import {verifyToken} from '../middlewares/authMiddleware.js'
const adminRoutes = express.Router();

// Add a new student
adminRoutes.post('/admin/students',verifyToken, addStudent);

// Remove a student by ID
adminRoutes.delete('/admin/students/:id',verifyToken, removeStudent);

// Add a new teacher
adminRoutes.post('/admin/teachers',verifyToken, addTeacher);

// Remove a teacher by ID
adminRoutes.delete('/admin/teachers/:id',verifyToken,removeTeacher);

export default adminRoutes;
