var sandwich = {
    bread:    "sourdough",
    protein:  "london broil",
    cheese:   "lacey swiss cheese",
    toppings: ["romaine lettuce", "heirloom tomatoes", "horseradish sauce"]
};
    
console.log(sandwich);

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);

var pizza = [{
crustType: "crustType",
sauceType: "sauceType",
cheeses: "cheeses",
toppings: ["toppings"]
}]

function pizzaOven(pizza) {
    return pizza
}
function randomPizza(pizza) {
    return Math.random(pizza)* pizzaOven.length
}

var p1= pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);
var p2= pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
console.log(p2)
console.log(pizzaOven("deep dish", "traditional", ["mozzarella"], ["romaine lettuce", "heirloom tomatoes"]))
console.log(randomPizza(pizza))
