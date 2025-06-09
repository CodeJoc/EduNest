const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
  const { title, description, videoUrls } = req.body;
  try {
    const course = new Course({
      title,
      description,
      videoUrls,
      instructor: req.user.id,
    });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor", "name");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.json(course);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.enrollCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course.enrolledStudents.includes(req.user.id)) {
      course.enrolledStudents.push(req.user.id);
      await course.save();
    }
    res.json(course);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
