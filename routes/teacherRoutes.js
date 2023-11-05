// routes/teacherRoutes.js
import express from 'express';
import {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} from '../controllers/TeacherController';

const router = express.Router();

// Get all teachers
router.get('/teachers', getAllTeachers);

// Get a single teacher by ID
router.get('/teachers/:id', getTeacherById);

// Create a new teacher
router.post('/teachers', createTeacher);

// Update a teacher by ID
router.put('/teachers/:id', updateTeacher);

// Delete a teacher by ID
router.delete('/teachers/:id', deleteTeacher);

export default router;
