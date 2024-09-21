const calculateBmi = (height, weight) => {
  let bmiValue = weight / (height * height);
  return bmiValue.toFixed(2);
};

module.exports = calculateBmi;
