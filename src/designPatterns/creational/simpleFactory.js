'use strict';
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
class Door {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
class WoodenDoor extends Door {
  constructor(width, height) {
    super(width, height);
  }
}
// Factory
class doorFactory {
  static makeWoodenDoor(w, h) {
    return new WoodenDoor(w, h);
  }
}

const woodenDoor = doorFactory.makeWoodenDoor(1800, 2000);
console.log(`Width: ${woodenDoor.width}`);
console.log(`Height: ${woodenDoor.height}`);
