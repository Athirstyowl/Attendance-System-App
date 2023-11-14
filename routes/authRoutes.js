import express from "express";
import {
  registerStudent,
  registerTeacher,
  loginStudent,
  loginTeacher,
} from "../controllers/Auth.js"
import { verifyToken,authenticateToken } from "../middlewares/authMiddleware.js";
const authRoutes = express.Router();

authRoutes.post('/register/student', verifyToken, registerStudent);

// Teacher registration
authRoutes.post('/register/teacher',verifyToken, registerTeacher);

// Student login
authRoutes.post('/login/student', verifyToken, loginStudent);

// Teacher login
authRoutes.post('/login/teacher', authenticateToken, loginTeacher);

export default authRoutes;