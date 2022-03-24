function nameMenuItem(foodName) {
var deliciousFood = 'Delicious ' +foodName;
return deliciousFood;
}

function createMenuItem(foodDish, price, type) {
  return { name: foodDish,
    price: price,
    type: type
  };
}
//var testFood = createMenuItem('Burrito',13, 'Dinner');
//console.log(testFood);

function addIngredients(ingredients, ingredientList){
  if (ingredientList.includes(ingredients)=== false){
ingredientList.push(ingredients);
} else{
  console.log("Sorry that ingredient is already in the list");
}
}

function formatPrice (price){
  return "$" + price;
}

function decreasePrice(price){
  return price * .90;
}
function createRecipe (title, ingredients, recipeType){
  return {title: title,
  ingredients: ingredients,
type: recipeType };
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
