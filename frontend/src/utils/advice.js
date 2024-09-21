const getHealthAdvice = (bmiValue) => {
  if (bmiValue < 18.5) {
    return "Underweight: You may need to gain some weight. Consider consulting a healthcare provider.";
  } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
    return "Normal weight: Keep up the good work! Maintain a balanced diet and regular exercise.";
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    return "Overweight: Consider adopting a healthier lifestyle with a balanced diet and regular exercise.";
  } else {
    return "Obesity: It's important to consult a healthcare provider for personalized advice.";
  }
};

export default getHealthAdvice;
