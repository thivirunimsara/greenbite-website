document.getElementById("calorieForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let age = parseInt(document.getElementById("age").value);
  let gender = document.getElementById("gender").value;
  let height = parseInt(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let activity = parseFloat(document.getElementById("activity").value);

  let bmr;
  if (gender === "male") {
    bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else {
    bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }

  let calories = Math.round(bmr * activity);

  let carbs = Math.round((calories * 0.5) / 4);
  let protein = Math.round((calories * 0.2) / 4);
  let fat = Math.round((calories * 0.3) / 9);

  let resultBox = document.getElementById("result");
  resultBox.innerHTML = `
    <h2>Your Daily Needs</h2>
    <p><strong>${calories}</strong> calories/day</p>
    <h3>Macronutrient Breakdown</h3>
    <ul>
      <li>Carbs: ${carbs} g</li>
      <li>Protein: ${protein} g</li>
      <li>Fat: ${fat} g</li>
    </ul>
  `;

  resultBox.style.opacity = 0;
  setTimeout(() => {
    resultBox.style.transition = "opacity 1s";
    resultBox.style.opacity = 1;
  }, 100);
});
