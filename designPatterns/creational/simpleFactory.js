"use strict";
/**
 * Consider, you are building a house and you need doors.
 * It would be a mess if every time you need a door, you put on your carpenter clothes
 * and start making a door in your house. Instead you get it made from a factory.
 *
 * Simple factory simply generates an instance for client without exposing any instantiation logic to the client
 *
 * In object-oriented programming (OOP), a factory is an object for creating other objects – formally
 * a factory is a function or method that returns objects of a varying prototype or class from some method call,
 * which is assumed to be "new".
 *
 * When to use?
 * When creating an object is not just a few assignments and involves some logic, it makes sense to put it in
 * a dedicated factory instead of repeating the same code everywhere.
 *
*/
// Object
function Door(width, height) {
    this.width = width;
    this.height = height;
}
Door.prototype.getWidth = function () {
    return this.width;
};
Door.prototype.getHeight = function () {
    return this.height;
};
class WoodenDoor {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
}
// Factory
function doorFactory() {
    function makeDoor(w, h) {
        return new Door(w, h);
    }
    function makeWoodenDoor(w, h) {
        return new WoodenDoor(w, h);
    }
    return {
        makeDoor,
        makeWoodenDoor
    };
}

const factory = doorFactory();
const door = factory.makeDoor(100, 200);
const woodenDoor = factory.makeWoodenDoor(1800, 2000);
console.log(`Width: ${door.getWidth()}; Height: ${door.getHeight()}`);
console.log(`Width: ${woodenDoor.getWidth()}; Height: ${woodenDoor.getHeight()}`);