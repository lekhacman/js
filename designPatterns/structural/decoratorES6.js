"use strict";

/**
 * Imagine you run a car service shop offering multiple services. Now how do you
 * calculate the bill to be charged? You pick one service and dynamically keep
 * adding to it the prices for the provided services till you get the final cost.
 * Here each type of service is a decorator.
 *
 * Decorator pattern lets you dynamically change the behavior of an object at run
 * time by wrapping them in an object of a decorator class.
 *
 * In object-oriented programming, the decorator pattern is a design pattern that
 * allows behavior to be added to an individual object, either statically or dynamically,
 * without affecting the behavior of other objects from the same class. The decorator
 * pattern is often useful for adhering to the Single Responsibility Principle, as it
 * allows functionality to be divided between classes with unique areas of concern.
 *
 */

class Coffee {
    getCost() {}
    getDescription(){}
}

class SimpleCoffee extends Coffee {
    getCost() {
        return 10;
    }
    getDescription() {
        return "Simple coffee";
    }
}
class MilkCofee extends Coffee {
    constructor(coffee) {
        if (!(coffee instanceof Coffee)) {
            throw new TypeError("Param must be an instance of Coffee");
        }
        super();
        this.coffee = coffee;
    }
    getCost() {
        return this.coffee.getCost() + 2;
    }
    getDescription() {
        return `${this.coffee.getDescription()}, and milk`;
    }
}

class WhipCofefee extends Coffee {
    constructor(coffee) {
        if (!(coffee instanceof Coffee)) {
            throw new TypeError("Param must be an instance of Coffee");
        }
        super();
        this.coffee = coffee;
    }
    getCost() {
        return this.coffee.getCost() + 5;
    }
    getDescription() {
        return `${this.coffee.getDescription()}, and whip`;
    }
}

class VanillaCofefee extends Coffee {
    constructor(coffee) {
        if (!(coffee instanceof Coffee)) {
            throw new TypeError("Param must be an instance of Coffee");
        }
        super();
        this.coffee = coffee;
    }
    getCost() {
        return this.coffee.getCost() + 3;
    }
    getDescription() {
        return `${this.coffee.getDescription()}, and vanilla`;
    }
}

let someCoffee = new SimpleCoffee();
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

someCoffee = new MilkCofee(someCoffee);
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

someCoffee = new WhipCofefee(someCoffee);
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());

someCoffee = new VanillaCofefee(someCoffee);
console.log(someCoffee.getCost());
console.log(someCoffee.getDescription());