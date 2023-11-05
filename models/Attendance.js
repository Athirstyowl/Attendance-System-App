import mongoose from "mongoose";
const attendanceSchema = new mongoose.Schema({
    lecture:
     { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Lecture',
        required: true,
    },
    student: 
    { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Student',
        required: true
    },
    attended: {
        type:Boolean,
        required:true
    },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

export default Attendance;
