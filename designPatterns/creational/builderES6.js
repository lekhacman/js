"use strict";

/**
 * Imagine you are at Hardee's and you order a specific deal, lets say,
 * "Big Hardee" and they hand it over to you without any questions; this
 * is the example of simple factory. But there are cases when the creation
 * logic might involve more steps. For example you want a customized Subway
 * deal, you have several options in how your burger is made e.g what bread
 * do you want? what types of sauces would you like? What cheese would you
 * want? etc. In such cases builder pattern comes to the rescue.
 *
 * Allows you to create different flavors of an object while avoiding
 * constructor pollution. Useful when there could be several flavors of
 * an object. Or when there are a lot of steps involved in creation of an object.
 *
 * The builder pattern is an object creation software design pattern with
 * the intentions of finding a solution to the telescoping constructor anti-pattern.
 *
 * When to use?
 * When there could be several flavors of an object and to avoid the
 * constructor telescoping. The key difference from the factory pattern is that;
 * factory pattern is to be used when the creation is a one step process while
 * builder pattern is to be used when the creation is a multi step process.
 *
 * This is an example of telescoping constructor anti-pattern. the number of
 * constructor parameters can quickly get out of hand and it might become difficult
 * to understand the arrangement of parameters. Plus this parameter list could keep
 * on growing if you would want to add more options in future. This is called
 * telescoping constructor anti-pattern.
 * function Burger(size, cheese = true, pepperoni = true, tomato = false, lettuce = true) {
 * }
 */

class Burger {
    constructor(burger) {
        this.size = burger.size;
        this.cheese = burger.cheese || false;
        this.pepperoni = burger.pepperoni || false;
        this.lettuce = burger.lettuce || false;
        this.tomato = burger.tomato || false;
    }
}

class BurgerBuilder {
    constructor(size) {
        if (!size) {
            throw new Error("Burger size is required");
        }
        this.size = size;
        this.cheese = false;
        this.pepperoni = false;
        this.lettuce = false;
        this.tomato = false;
    }
    addPepperoni() {
        this.pepperoni = true;
        return this;
    }
    addLettuce() {
        this.lettuce = true;
        return this;
    }
    addCheese() {
        this.cheese = true;
        return this;
    }
    addTomato() {
        this.tomato = true;
        return this;
    }
    build() {
        return new Burger(this);
    }
}
const burger = new BurgerBuilder(14)
    .addPepperoni()
    .addCheese()
    .build();
console.log(burger);