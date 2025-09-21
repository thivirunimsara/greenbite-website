
let recipes = [
  {
    title: "Veggie Salad",
    image: "veggie salad.jpg",
    description: "Fresh mixed vegetable salad.",
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Carrot"],
    category: "breakfast", 
    steps: ["Chop vegetables", "Mix in a bowl", "Add dressing"],
    nutrition: {Calories: "150", Protein: "3g", Carbs: "10g", Fat: "5g"}
  },
  {
    title: "Fruit Smoothie",
    image: "fruit smoothie.jpg",
    description: "Refreshing banana and berry smoothie.",
    ingredients: ["Banana", "Strawberries", "Milk", "Honey"],
    category: "drinks",
    steps: ["Blend all ingredients", "Serve chilled"],
    nutrition: {Calories: "200", Protein: "4g", Carbs: "30g", Fat: "2g"}
  },

    {
    title: "Grilled Chicken",
    image: "grilled chicken.jpg",
    description: "Juicy grilled chicken with herbs.",
    ingredients: ["Chicken breast", "Olive oil", "Garlic", "Rosemary"],
    category: "lunch",
    steps: ["Marinate chicken", "Heat grill", "Cook 6-8 mins each side"],
    nutrition: {Calories: "250", Protein: "27g", Carbs: "0g", Fat: "12g"}
  }
];


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



document.getElementById("searchInput").addEventListener("input", e => {
  let value = e.target.value.toLowerCase();
  let filtered = recipes.filter(r => r.title.toLowerCase().includes(value));
  displayRecipes(filtered);
});


function openRecipe(recipe) {
  document.getElementById("recipeTitle").innerText = recipe.title;
  document.getElementById("recipeImage").src = recipe.image;

 
  let ingList = document.getElementById("ingredientsList");
  ingList.innerHTML = "";
  recipe.ingredients.forEach(i => {
    let li = document.createElement("li");
    li.innerText = i;
    ingList.appendChild(li);
  });

 
  let stepsList = document.getElementById("stepsList");
  stepsList.innerHTML = "";
  recipe.steps.forEach(s => {
    let li = document.createElement("li");
    li.innerText = s;
    stepsList.appendChild(li);
  });

 
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


displayRecipes(recipes);
