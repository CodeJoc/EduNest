const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  createCourse,
  getAllCourses,
  getCourseById,
  enrollCourse,
} = require("../controllers/courseController");

router.post("/", protect, createCourse); // instructor only in frontend
router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.post("/:id/enroll", protect, enrollCourse);

module.exports = router;
