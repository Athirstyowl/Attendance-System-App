// routes/teacherRoutes.js
import express from 'express';
import {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from '../controllers/TeacherController.js';
import {verifyToken} from "../middlewares/authMiddleware.js";

const teacherRoutes = express.Router();

// Get all teachers
teacherRoutes.get('/teachers',verifyToken, getAllTeachers);

// Get a single teacher by ID
teacherRoutes.get('/teachers/:id',verifyToken, getTeacherById);

// Create a new teacher
teacherRoutes.post('/teachers',verifyToken,createTeacher);

// Update a teacher by ID
teacherRoutes.put('/teachers/:id',verifyToken, updateTeacher);

// Delete a teacher by ID
teacherRoutes.delete('/teachers/:id',verifyToken, deleteTeacher);

export default teacherRoutes;
