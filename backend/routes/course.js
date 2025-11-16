import express from "express";
import {
  getAllCourses,
  getSingleCourse,
  fetchLectures,
  fetchLecture,
  getMyCourses,
  checkout,
  paymentVerification,
} from "../controllers/course.js";
import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

// FINAL ROUTES = /api/course/all
router.get("/all", getAllCourses);

// FINAL ROUTES = /api/course/:id
router.get("/:id", getSingleCourse);

// FINAL ROUTES = /api/course/lectures/:id
router.get("/lectures/:id", isAuth, fetchLectures);

// FINAL ROUTES = /api/course/lecture/:id
router.get("/lecture/:id", isAuth, fetchLecture);

// FINAL ROUTES = /api/course/mycourse
router.get("/mycourse", isAuth, getMyCourses);

// FINAL ROUTES = /api/course/checkout/:id
router.post("/checkout/:id", isAuth, checkout);

// FINAL ROUTES = /api/course/verification/:id
router.post("/verification/:id", isAuth, paymentVerification);

export default router;
