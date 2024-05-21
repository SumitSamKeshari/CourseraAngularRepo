var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("number array: ", numberArray);

function above5Filter(value) {
  return value >5;
}

var filteredNumberArray = numberArray.filter(above5Filter);
console.log("Filtered number array: ", filteredNumberArray);

// var filteredNumberArray = numberArray.filter(function (value){
//   return value >5 ;
// });
//
// console.log("Filtered number array: ", filteredNumberArray);


var shoppingList =[
  "Milk","Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol",
  "Pepto Bismol (Chocolate flavor )","Pepto Bismol (Cookie flavor)",
];

console.log("Shopping List: ",shoppingList);

var searchValue ="Bismol";
function containsFilter(value) {
  return value.indexOf(searchValue) !== -1;
}

var searchShoppingList = shoppingList.filter(containsFilter);
console.log("Searched Shopping List: ", searchShoppingList);
