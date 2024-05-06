const pizzaTopping = ["Bacon", "Sausage", "Cheese", "pepperoni"];

function greetCustomer() {
  let message = `Hello Welcome to Pizza Place , Our toppings are:`;

  for (let topping of pizzaTopping) {
    message += `${topping},`;
  }
  console.log(message);
}
greetCustomer();

// eslint-disable-next-line no-undef

function getPizzaOrder(size, crust, ...toppings) {
  let message = `One ${size} ${crust} crust pizza with `;

  for (let topping of toppings) {
    message += `${topping},`;
  }
  message += ",.... coming up!";

  console.log(message);
  return [size, crust, toppings];
}
// Invoking function
getPizzaOrder('Small', 'thin', 'Sasuage', 'Bacon');

function preparePizza([size, crust, toppings]) {
  console.log("...cooking pizza...");

  // return  an object

  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

function servePizza(pizza) {
  let message = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    message += `${topping},`;
  }
  message += ".. Enjoy";
  console.log(message);
  return pizza;

  // call each fucnction 
  const orderArray = getPizzaOrder("Small", "thin", "Sasuage", "Bacon");
  const orderObject =  preparePizza(orderArray);
  const orderSameObject = servePizza(orderArray);

servePizza(preparePizza(getPizzaOrder('medium','thin','sausage','bacon')))