// routes/teacherRoutes.js
import express from 'express';
import {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from '../controllers/TeacherController.js';

const teacherRoutes = express.Router();

// Get all teachers
teacherRoutes.get('/teachers', getAllTeachers);

// Get a single teacher by ID
teacherRoutes.get('/teachers/:id', getTeacherById);

// Create a new teacher
teacherRoutes.post('/teachers', createTeacher);

// Update a teacher by ID
teacherRoutes.put('/teachers/:id', updateTeacher);

// Delete a teacher by ID
teacherRoutes.delete('/teachers/:id', deleteTeacher);

export default teacherRoutes;
