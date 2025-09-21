// Recipe data
let recipes = [
  {
    title: "Veggie Salad",
    image: "https://cdn.discordapp.com/attachments/1053757772782633010/1419012133995151510/image.jpg?ex=68d03588&is=68cee408&hm=fedbd6ae4568a31e23c51018e339ec79667d72829adda164f4a37cb88b90dafa&",
    description: "Fresh mixed vegetable salad.",
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Carrot"],
    category: "breakfast", 
    steps: ["Chop vegetables", "Mix in a bowl", "Add dressing"],
    nutrition: {Calories: "150", Protein: "3g", Carbs: "10g", Fat: "5g"}
  },
  {
    title: "Fruit Smoothie",
    image: "https://cdn.discordapp.com/attachments/1053757772782633010/1419013254579228704/image.jpg?ex=68d03693&is=68cee513&hm=16ec6744286deab1011329ea7f120f7b1e7241e807f86ad078ceac17e2cbee66&",
    description: "Refreshing banana and berry smoothie.",
    ingredients: ["Banana", "Strawberries", "Milk", "Honey"],
    category: "drinks",
    steps: ["Blend all ingredients", "Serve chilled"],
    nutrition: {Calories: "200", Protein: "4g", Carbs: "30g", Fat: "2g"}
  },

    {
    title: "Grilled Chicken",
    image: "https://cdn.discordapp.com/attachments/1053757772782633010/1419013602979086497/image.jpg?ex=68d036e6&is=68cee566&hm=9bd382c214b13eea390f5ace2b17692d3f3d947f49d8c82d1c62247879401c0a&",
    description: "Juicy grilled chicken with herbs.",
    ingredients: ["Chicken breast", "Olive oil", "Garlic", "Rosemary"],
    category: "lunch",
    steps: ["Marinate chicken", "Heat grill", "Cook 6-8 mins each side"],
    nutrition: {Calories: "250", Protein: "27g", Carbs: "0g", Fat: "12g"}
  }
];

// Display recipes
function displayRecipes(list) {
  let container = document.getElementById("recipe-list");
  container.innerHTML = "";
  list.forEach((r, i) => {
    let card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${r.image}" alt="${r.title}">
      <h3>${r.title}</h3>
      <p>${r.description}</p>
    `;
    card.onclick = () => openRecipe(r);
    container.appendChild(card);
  });
}
function filterByCategory(category) {
  if (category === "all") {
    displayRecipes(recipes);
  } else {
    let filtered = recipes.filter(r => r.category === category);
    displayRecipes(filtered);
  }
}


// Search recipes
document.getElementById("searchInput").addEventListener("input", e => {
  let value = e.target.value.toLowerCase();
  let filtered = recipes.filter(r => r.title.toLowerCase().includes(value));
  displayRecipes(filtered);
});

// Modal
function openRecipe(recipe) {
  document.getElementById("recipeTitle").innerText = recipe.title;
  document.getElementById("recipeImage").src = recipe.image;

  // Ingredients
  let ingList = document.getElementById("ingredientsList");
  ingList.innerHTML = "";
  recipe.ingredients.forEach(i => {
    let li = document.createElement("li");
    li.innerText = i;
    ingList.appendChild(li);
  });

  // Steps
  let stepsList = document.getElementById("stepsList");
  stepsList.innerHTML = "";
  recipe.steps.forEach(s => {
    let li = document.createElement("li");
    li.innerText = s;
    stepsList.appendChild(li);
  });

  // Nutrition
  let table = document.getElementById("nutritionTable");
  table.innerHTML = "";
  for (let [key, val] of Object.entries(recipe.nutrition)) {
    let row = `<tr><td>${key}</td><td>${val}</td></tr>`;
    table.innerHTML += row;
  }

  document.getElementById("recipeModal").style.display = "block";
}


document.getElementById("closeModal").onclick = function() {
  document.getElementById("recipeModal").style.display = "none";
};

// Init
displayRecipes(recipes);
