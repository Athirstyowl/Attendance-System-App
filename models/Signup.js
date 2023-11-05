import mongoose from 'mongoose';


// Define a Mongoose schema for the "signup" collection
const signupSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
  

 // Create a Mongoose model for the "signup" collection 
const Signup = mongoose.model('Signup', signupSchema);
    
export default Signup;