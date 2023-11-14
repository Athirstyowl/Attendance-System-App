import Lecture from '../models/Lecture.js';

// Controller functions for Lecture model

// Get all lectures
export const getAllLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find();
    res.status(200).json(lectures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single lecture by ID
export const getLectureById = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    if (!lecture) {
      return res.status(404).json({ message: 'Lecture not found' });
    }
    res.status(200).json(lecture);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new lecture
export const createLecture = async (req, res) => {
  try {
    const lecture = new Lecture(req.body);
    await lecture.save();
    res.status(201).json(lecture);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a lecture by ID
export const updateLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { studentsAttended: { $each: req.body.studentsAttended } },
      },
      {
        new: true,
      }
    );
    if (!lecture) {
      return res.status(404).json({ message: 'Lecture not found' });
    }
    res.status(200).json(lecture);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a lecture by ID
export const deleteLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findByIdAndDelete(req.params.id);
    if (!lecture) {
      return res.status(404).json({ message: 'Lecture not found' });
    }
    res.status(200).json({ message: 'Lecture deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
