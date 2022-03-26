
function createRestaurant(restaurantInfo){
  return restaurant = {name: restaurantInfo,
                      menus: {breakfast:[],lunch:[], dinner:[]},
                      };
              }

function addMenuItem(restaurant,menuItem){
  //if menu item is breakfast
  if (menuItem.type === "breakfast" &&
          !restaurant.menus.breakfast.includes(menuItem)){
    restaurant.menus.breakfast.push(menuItem);
    //menu item is lunch
  }else if (menuItem.type === "lunch" &&
                !restaurant.menus.lunch.includes(menuItem)){
        restaurant.menus.lunch.push(menuItem);
        //menu item is dinner
      }else if (menuItem.type === "dinner" &&
                  !restaurant.menus.dinner.includes(menuItem)){
          restaurant.menus.dinner.push(menuItem);
  }
  }
//buggy V  need to figure out how to access the array within the an
//object cleanly.
// function removeMenuItem(restaurant,menuItem,type){
//   for (var i=0; i<restaurant.menus.; i++){
//     if(restaurant.menus.type[i].name === menuItem){
//       restaurant.menus.type.splice(i,1);
//     }
//   }
//   }

function removeMenuItem(restaurant,itemName,type){
  for(var i=0; i<restaurant.menus[type].length; i++){
    if(restaurant.menus[type][i].name.includes(itemName)){
      restaurant.menus[type].splice(i,1);
      return `No one is eating our ${itemName} - it has been removed from the ${type} menu!`;
    }
  }
      return `Sorry, we don't sell ${itemName}, try adding a new recipe!`;
  }




module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
