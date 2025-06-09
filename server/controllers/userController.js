const User = require("../models/User");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.addExperience = async (req, res) => {
  const { company, title, years } = req.body;
  try {
    const user = await User.findById(req.user.id);
    user.experience.push({ company, title, years });
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.addEducation = async (req, res) => {
  const { school, degree, years } = req.body;
  try {
    const user = await User.findById(req.user.id);
    user.education.push({ school, degree, years });
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.json({ msg: "Account deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
