"use strict";

/**
 * Extending our door example from Simple Factory. Based on your needs you
 * might get a wooden door from a wooden door shop, iron door from an iron
 * shop or a PVC door from the relevant shop. Plus you might need a guy with
 * different kind of specialities to fit the door, for example a carpenter
 * for wooden door, welder for iron door etc. As you can see there is a dependency
 * between the doors now, wooden door needs carpenter, iron door needs a welder etc.
 *
 * A factory of factories; a factory that groups the individual but related/dependent
 * factories together without specifying their concrete classes.
 *
 * The abstract factory pattern provides a way to encapsulate a group of individual
 * factories that have a common theme without specifying their concrete classes
 *
 * When to use?
 * When there are interrelated dependencies with not-that-simple creation logic involved
 */
const config = require("../../core/config");
function Door() {
}
Door.prototype.getDescription = function () {
    throw new Error(config.CONSTANTS.MESSAGES.ERROR.MISSING_OVERIDE);
};
function WoodenDoor() {
}
WoodenDoor.prototype = Object.create(Door.prototype);
WoodenDoor.prototype.constructor = WoodenDoor;
WoodenDoor.prototype.getDescription = function () {
    console.log("I'm a wooden door");
};

function IronDoor() {
}
IronDoor.prototype = Object.create(Door.prototype);
IronDoor.prototype.constructor = IronDoor;
IronDoor.prototype.getDescription = function () {
    console.log("I'm an iron door");
};

function DoorFittingExpert() {
}
DoorFittingExpert.prototype.getDescription = function () {
    throw new Error(config.CONSTANTS.MESSAGES.ERROR.MISSING_OVERIDE);
};
function Welder() {
}
Welder.prototype = Object.create(DoorFittingExpert.prototype);
Welder.prototype.constructor = Welder;
Welder.prototype.getDescription = function () {
    console.log("I can only fit iron doors");
};

function Carpenter() {
}
Carpenter.prototype = Object.create(DoorFittingExpert.prototype);
Carpenter.prototype.constructor = Carpenter;
Carpenter.prototype.getDescription = function () {
    console.log("I can only fit wooden doors");
};

function DoorFactory() {
}
DoorFactory.prototype.makeDoor = function () {
    throw new Error(config.CONSTANTS.MESSAGES.ERROR.MISSING_OVERIDE);
};
DoorFactory.prototype.makeFittingExpert = function () {
    throw new Error(config.CONSTANTS.MESSAGES.ERROR.MISSING_OVERIDE);
};

function WoodenDoorFactory() {
}
WoodenDoorFactory.prototype = Object.create(DoorFactory.prototype);
WoodenDoorFactory.prototype.constructor = WoodenDoorFactory;
WoodenDoorFactory.prototype.makeDoor = function () {
    return new WoodenDoor();
};
WoodenDoorFactory.prototype.makeFittingExpert = function () {
    return new Carpenter();
};

function IronDoorFactory() {
}
IronDoorFactory.prototype = Object.create(DoorFactory.prototype);
IronDoorFactory.prototype.constructor = IronDoorFactory;
IronDoorFactory.prototype.makeDoor = function () {
    return new IronDoor();
};
IronDoorFactory.prototype.makeFittingExpert = function () {
    return new Welder();
};

const woodenFactory = new WoodenDoorFactory();
const ironFactory = new IronDoorFactory();

let door = woodenFactory.makeDoor();
let expert = woodenFactory.makeFittingExpert();

door.getDescription();
expert.getDescription();

door = ironFactory.makeDoor();
expert = ironFactory.makeFittingExpert();

door.getDescription();
expert.getDescription();