import express from 'express';
import mongoose from 'mongoose';
import teacherRoutes from './routes/teacherRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import lectureRoutes from './routes/lectureRoutes.js';
import attendanceRoutes from './routes/attendanceRoutes.js';
import adminRoutes from './routes/adminRoutes.js';

const app = express();
const uri = "mongodb+srv://atharvagholap24:atharva04@cluster0.5zquozb.mongodb.net/?retryWrites=true";

app.use(express.json());
mongoose
  .connect(uri, { })
  .then(() => {
    console.log('Connected to MongoDB Atlas');

    mongoose.connection.useDb('users');

    app.use('/api', teacherRoutes);
    app.use('/api', studentRoutes);
    app.use('/api', lectureRoutes);
    app.use('/api', attendanceRoutes);
    app.use('/api', adminRoutes);

    app.listen(6000, () => {
      console.log('Listening on port 6000....');
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

/*
    // Create the "users" database if it doesn't exist
    mongoose.connection.useDb('users');
///----------------------------------------------------------------

    // Set up a route to handle POST requests for signup
    app.post('/signup', async (req, res) => {
      // Create a new signup document
      console.log("Received data:", req.body);

      const hashcodedPassword = await bcrypt.hash(req.body.password,10);
      const newSignup = new Signup({
        name: req.body.name,
        email: req.body.email,
        password:hashcodedPassword,
      });

      try {
        const result = await newSignup.save();
        console.log("stored data is :",result);
        res.status(201).send('Signup successful');
       
      } catch (error) {
        res.status(500).send('Error signing up');
      }
    });
//--------------------------------------------------------------------
    app.post('/login',async(req,res) => {
      console.log("Received data is:",req.body)
      const { email, password } = req.body;
      try{
        //Find a user by email
        const user = await Signup.findOne({email});
        console.log("user:",user)
        if (!user) {
          return res.status(401).json({ message: 'User not found' });
        }
        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ message: 'Invalid password' });
        }
        console.log("user name ",user.name);
        res.status(200).json({ message: 'Login successful' });
      }
      catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }
    })
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });



app.listen(6000, () => {
  console.log('Listening on port 6000....');
});
*/
