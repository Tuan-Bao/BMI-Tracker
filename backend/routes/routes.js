const express = require("express");
const router = express.Router();

const {
  createBmi,
  getBmiHistory,
  updateBmi,
  deleteBmi,
} = require("../controllers/bmiController");

router.post("/", createBmi);
router.get("/", getBmiHistory);
router.put("/:id", updateBmi);
router.delete("/:id", deleteBmi);

module.exports = router;
