import express from 'express';
import {
  getAttendanceByLecture,
  getAttendanceByStudentId,
  createAttendance,
  updateAttendance,
  deleteAttendance,
} from '../controllers/AttendanceController.js';

const attendanceRoutes = express.Router();

attendanceRoutes.get('/attendance/:lecture', getAttendanceByLecture);
attendanceRoutes.get('/attendance/:studentId', getAttendanceByStudentId);
attendanceRoutes.post('/attendance', createAttendance);
attendanceRoutes.put('/attendance/:id', updateAttendance);
attendanceRoutes.delete('/attendance/:id', deleteAttendance);

export default attendanceRoutes;
