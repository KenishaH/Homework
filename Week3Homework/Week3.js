

const pizzaTopping = ["Bacon", "Sausage", "Cheese", "pepperoni"];

function greetCustomer() {
  console.log("Hello Welcome to Pizza Place , Our toppings are");
  for (let pizza of pizzaTopping) {
    console.log(pizza);
  }
}
greetCustomer();

const order = {
  size: "Small",
  crust: "Thick",
  toppings: ["Bacon", "Sausage", "Cheese", "pepperoni"],

};
//const size = ["small", "medium", "large"];
//const crust = ["thick", "thin"];

function getPizzaOrdeer(size, crust, ...toppings) {
  for (let num in order) {
    console.log(
      `One ${order.size}, ${order.crust} crust and ${order.toppings} coming up!`
    );
  }
}
getPizzaOrdeer();

function preparePizza() {
  console.log("Cooking up");
  for (let key in order) {
    console.log(`${key} => ${order[key]}`);
  }
}
preparePizza();

function servePizza(){
  console.log(`Order up here is your ${order.size},${order.toppings}`);
}
servePizza();
