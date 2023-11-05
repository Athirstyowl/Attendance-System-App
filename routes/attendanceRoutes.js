import express from 'express';
import {
  getAllAttendance,
  getAttendanceByStudentId,
  createAttendance,
  updateAttendance,
  deleteAttendance,
} from '../controllers/AttendanceController';

const router = express.Router();

router.get('/attendance', getAllAttendance);
router.get('/attendance/:studentId', getAttendanceByStudentId);
router.post('/attendance', createAttendance);
router.put('/attendance/:id', updateAttendance);
router.delete('/attendance/:id', deleteAttendance);

export default router;
