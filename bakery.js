const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Code here!
  const ingredientList = bakeryA.concat(bakeryB)

  for (let recipe of recipes) {
    if (
      ingredientList.includes(recipe.ingredients[0]) &&
      ingredientList.includes(recipe.ingredients[1])
    ) {
      return recipe.name
    }
  }

  return ""
}

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"]
let bakeryB = ["milk", "butter", "cream cheese"]
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
]

console.log(chooseRecipe(bakeryA, bakeryB, recipes))

bakeryA = ["potatoes", "bay leaf", "raisins"]
bakeryB = ["red bean", "dijon mustard", "apples"]
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
]

console.log(chooseRecipe(bakeryA, bakeryB, recipes))
