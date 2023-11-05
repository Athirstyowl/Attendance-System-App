import mongoose from "mongoose";

const lectureSchema = new mongoose.Schema({
    teacherId:{ 
        type: Number,
        required: true
    },
    department: {
        type: String
    },
    subject: {
        type:String
    },
    date: Date,
    qrcode: String,
    studentsAttended: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Student' 
        }
    ] // Store the ObjectIds of attending student
});

const Lecture = mongoose.model('Lecture', lectureSchema);

export default Lecture;
