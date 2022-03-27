class Chef {
  constructor(name, restaurant) {
this.name = name;
this.restaurant = restaurant;
  }
  //methods
  greetCustomer(name, morning){
    if (morning === true){
    return `Good morning, ${name}!`
  }
    return `Hello, ${name}!`
  }
  checkForFood(foodItem){

    if (restaurant.menus[foodItem.type].includes(foodItem)){
return `Yes, we're serving ${foodItem.name} today!`;
    }
    return `Sorry, we aren't serving ${foodItem.name} today.`
  }

}


module.exports = Chef;
