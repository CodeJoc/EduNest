const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  getProfile,
  updateProfile,
  addExperience,
  addEducation,
  deleteAccount,
} = require("../controllers/userController");

router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);
router.post("/experience", protect, addExperience);
router.post("/education", protect, addEducation);
router.delete("/delete", protect, deleteAccount);

module.exports = router;
