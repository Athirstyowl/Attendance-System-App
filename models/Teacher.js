import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        min:2,
        max:200,
    },
    email:{
        type: String,
        required: true,
        max: 50,
        unique: true,
       validate: {
            validator: function (v) {
              return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(v);
            },
            message: (props) => `${props.value} is not a valid email address!`,
          },
    },
    password: {
        type: String,
        required: true,
        min: 5,
        validate: {
        validator: function (v) {
         
          return v.length >= 5;
        },
        message: (props) => `Password must be at least 5 characters long!`,
      },
      },
    contact: {
        type:Number,
        required:true,
        length:10
    },
    idNumber:{
        type:Number,
        required:true,
    },
    department: {
        type:String,
        required:true,
    },
});

const Teacher = mongoose.model('Teacher', teacherSchema);

export default Teacher;