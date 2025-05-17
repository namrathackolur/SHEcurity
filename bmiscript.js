document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
  
    // Calculate BMI
    const bmi = weight / ((height / 100) * (height / 100));
  
    // Determine BMI status
    let bmiStatus;
    if (bmi < 18.5) {
      bmiStatus = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiStatus = 'Healthy weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiStatus = 'Overweight';
    } else {
      bmiStatus = 'Obese';
    }
  
    // Display result
    const result = `
      <p>Your BMI: ${bmi.toFixed(2)}</p>
      <p>Status: ${bmiStatus}</p>
    `;
    document.getElementById('bmiResult').innerHTML = result;
  });
  