// routes/lectureRoutes.js
import express from 'express';
import {
  getAllLectures,
  getLectureById,
  createLecture,
  updateLecture,
  deleteLecture,
} from '../controllers/LectureController';

const router = express.Router();

// Get all lectures
router.get('/lectures', getAllLectures);

// Get a single lecture by ID
router.get('/lectures/:id', getLectureById);

// Create a new lecture
router.post('/lectures', createLecture);

// Update a lecture by ID
router.put('/lectures/:id', updateLecture);

// Delete a lecture by ID
router.delete('/lectures/:id', deleteLecture);

export default router;
