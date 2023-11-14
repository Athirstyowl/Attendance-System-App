import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Student from "../models/Student";
import Teacher from "../models/Teacher";

const JWT_SECRET = "erastourkeliiyeexcited"

export const registerStudent = async(req,res) => {
    try{
        const{
            name,
            studentId,
            email,
            password,
            contact,
            department            
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        const newStudent = new Student({
            name,
            studentId,
            email,
            password : passwordHash,
            contact,
            department 
        })

        const saveStudent =  await newStudent.save();
        res.status(201).jaon(saveStudent);

    }
    catch(error){
        res.status(500).json({error:err.message});
    }
}

export const registerTeacher = async(req,res) => {
    try{
        const{
            name,
            email,
            password,
            contact,
            idNumber,
            department,
            isAdmin,
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        const newTeacher = new Teacher({
            name,
            email,
            password:passwordHash,
            contact,
            idNumber,
            department,
            isAdmin
        })

        const saveTeacher = await newTeacher.save();
        res.status(201).json(saveTeacher);
    }
    catch(error){
        res.status(500).json({error:err.message});
    }
}

export const loginStudent = async(req,res) => {
    try{
        const {email, password} = req.body;
        const student = await Student.findOne({email:email});

        if(!student) return(
            res.status(400).json({msg:"Student does not exist"})
            );

        const isMatch = await bcrypt.compare(password, student.password);
        if(!isMatch) return res.status(400).json({msg:"Invalid Credentials"});

        const token = jwt.sign({id:student._id},JWT_SECRET);
        delete student.password;

        res.status(200).json({token,student})
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

export const loginTeacher = async(req,res) => {
    try{
        const {email, password} = req.body;
        const teacher = await Teacher.findOne({email:email});

        if(!teacher) return(
            res.status(400).json({msg:"Teacher does not exist"})
            );

        const isMatch = await bcrypt.compare(password, teacher.password);
        if(!isMatch) return res.status(400).json({msg:"Invalid Credentials"});

        const token = jwt.sign({id:teacher._id},JWT_SECRET);
        delete teacher.password;

        res.status(200).json({ token, teacher, isAdmin: teacher.isAdmin });
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

