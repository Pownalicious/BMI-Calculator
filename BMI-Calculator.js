function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value / 100; // Convert cm to meters
  const bmi = weight / (height * height);

  if (isNaN(bmi)) {
    document.getElementById("result").innerText =
      "Please enter valid values for weight and height.";
  } else {
    let message = `Your BMI is ${bmi.toFixed(2)}. `;

    if (bmi < 18.5) {
      message += "Your BMI is too low.";
    } else if (bmi >= 25) {
      message += "Your BMI is too high.";
    } else {
      message += "Your BMI is within the normal range.";
    }
    document.getElementById("result").innerText = message;
  }
}

calculateBMI();
