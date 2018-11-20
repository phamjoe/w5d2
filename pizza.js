class Pizza {
  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ['cheese'];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }
}

const pizza1 = new Pizza('large', 'cheesy');
console.log(pizza1.toppings);
pizza1.addTopping('mushrooms');
pizza1.addTopping('peppers');
console.log(pizza1);

const pizza2 = new Pizza();
console.log(pizza2.toppings);
pizza2.addTopping('more cheese');
console.log(pizza2.toppings);
