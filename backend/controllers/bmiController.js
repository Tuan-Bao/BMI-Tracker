const Bmi = require("../models/Bmi");
const calculateBmi = require("../utils/calculateBmi");
const convertToDate = require("../utils/convertToDate");

exports.createBmi = async (req, res) => {
  const { height, weight, bmi, date } = req.body;
  try {
    const formattedDate = convertToDate(date);
    const newBmi = await Bmi.findOneAndUpdate(
      { date: formattedDate },
      { height, weight, bmi, date: formattedDate },
      { new: true, upsert: true }
    );
    res.status(201).json(newBmi);
  } catch (err) {
    next(err);
  }
};

exports.getBmiHistory = async (req, res) => {
  try {
    const bmiHistory = await Bmi.find().sort({ date: -1 }).limit(10);
    const sortedHistory = bmiHistory.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    res.json(sortedHistory);
  } catch (err) {
    next(err);
  }
};

exports.updateBmi = async (req, res) => {
  const { id } = req.params;
  const { height, weight, date } = req.body;
  try {
    const bmiValue = calculateBmi(height, weight);
    const updateData = await Bmi.findByIdAndUpdate(
      id,
      { height, weight, bmi: bmiValue, date },
      { new: true }
    );
    res.json(updateData);
  } catch (err) {
    next(err);
  }
};

exports.deleteBmi = async (req, res) => {
  const { id } = req.params;
  try {
    await Bmi.findByIdAndDelete(id);
    res.json({ message: "BMI record has been deleted" });
  } catch (err) {
    next(err);
  }
};
