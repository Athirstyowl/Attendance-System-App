// routes/lectureRoutes.js
import express from 'express';
import {
  getAllLectures,
  getLectureById,
  createLecture,
  updateLecture,
  deleteLecture,
} from '../controllers/LectureController.js';

const lectureRoutes = express.Router();

// Get all lectures
lectureRoutes.get('/lectures', getAllLectures);

// Get a single lecture by ID
lectureRoutes.get('/lectures/:id', getLectureById);

// Create a new lecture
lectureRoutes.post('/lectures', createLecture);

// Update a lecture by ID
lectureRoutes.put('/lectures/:id', updateLecture);

// Delete a lecture by ID
lectureRoutes.delete('/lectures/:id', deleteLecture);

export default lectureRoutes;
