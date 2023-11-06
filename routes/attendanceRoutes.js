import express from 'express';
import {
  getAllAttendance,
  getAttendanceByStudentId,
  createAttendance,
  updateAttendance,
  deleteAttendance,
} from '../controllers/AttendanceController.js';

const attendanceRoutes = express.Router();

attendanceRoutes.get('/attendance', getAllAttendance);
attendanceRoutes.get('/attendance/:studentId', getAttendanceByStudentId);
attendanceRoutes.post('/attendance', createAttendance);
attendanceRoutes.put('/attendance/:id', updateAttendance);
attendanceRoutes.delete('/attendance/:id', deleteAttendance);

export default attendanceRoutes;
