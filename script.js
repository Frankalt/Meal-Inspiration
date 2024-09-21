const ingredients = [
  "Broad Beans",
  "Chickpeas",
  "Brown Rice",
  "Tomato",
  "Olives",
  "Hummus",
  "Chilli",
  "Feta",
  "Coriander",
  "Mint",
  "Lemon",
  "Red Cabbage",
  "Courgette",
  "Pitta Bread",
  "Greek Yoghurt",
  "Garlic",
  "Cardamom",
  "Celeriac",
  "Salmon",
  "Balsalmic Vinegar",
  "Fennel",
  "Artichoke"
];

function generateRecipe() {
  const recipeList = document.getElementById("recipe-list");
  recipeList.innerHTML = "";

  const randomIngredients = getRandomIngredients(6);

  for (let i = 0; i < randomIngredients.length; i++) {
    const ingredient = randomIngredients[i];
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    recipeList.appendChild(listItem);
  }

  function getRandomIngredients(count) {
    const randomIngredients = [];
    const ingredientsCopy = ingredients.slice();

    while (randomIngredients.length < count) {
      const randomIndex = Math.floor(Math.random() * ingredientsCopy.length);
      const pickedIngredient = ingredientsCopy.splice(randomIndex, 1)[0];
      randomIngredients.push(pickedIngredient);
    }
    return randomIngredients;
  }
}
