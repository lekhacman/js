"use strict";

/**
 * Remember dolly? The sheep that was cloned! Lets not get into the details
 * but the key point here is that it is all about cloning
 *
 * Create object based on an existing object through cloning.
 *
 * The prototype pattern is a creational design pattern in software development.
 * It is used when the type of objects to create is determined by a prototypical
 * instance, which is cloned to produce new objects.
 *
 * When to use?
 * When an object is required that is similar to existing object or when the
 * creation would be expensive as compared to cloning.
 */

class Sheep {
    constructor(name, category = "Mountain Sheep") {
        this.name = name;
        this.category = category;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setCategory(category) {
        this.category = category;
    }
    getCategory() {
        return this.category;
    }
}
const original = new Sheep("Jolly");
console.log(original.getName());
console.log(original.getCategory());

// Clone and modify what is required
const cloned = Object.create(original);
cloned.setName("Dolly");
console.log(cloned.getName());
console.log(cloned.getCategory());

console.log(original.getName());
console.log(original.getCategory());