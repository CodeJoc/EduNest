const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  videoUrls: [String],
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

module.exports = mongoose.model("Course", CourseSchema);
