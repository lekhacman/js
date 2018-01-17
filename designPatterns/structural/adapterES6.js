"use strict";

/**
 * Consider that you have some pictures in your memory card and you need to transfer
 * them to your computer. In order to transfer them you need some kind of adapter that
 * is compatible with your computer ports so that you can attach memory card to your
 * computer. In this case card reader is an adapter. Another example would be the famous
 * power adapter; a three legged plug can't be connected to a two pronged outlet, it
 * needs to use a power adapter that makes it compatible with the two pronged outlet.
 * Yet another example would be a translator translating words spoken by one person to another
 *
 * Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make
 * it compatible with another class.
 *
 * In software engineering, the adapter pattern is a software design pattern that allows
 * the interface of an existing class to be used as another interface. It is often used
 * to make existing classes work with others without modifying their source code.
 *
 */
const config = require("../../core/config");
class Lion {
    roar() {
        throw new Error(config.CONSTANTS.MESSAGES.ERROR.MISSING_OVERIDE);
    }
}

class AfrianLion extends Lion {

    roar() {}

}
class AsianLion extends Lion {
    roar() {

    }
}
class WildDog {
    bark() {}
}
class WildDogAdapter extends Lion {

    constructor(dog) {
        if (!(dog instanceof WildDog)) {
            throw new TypeError("Param must be a WildDog");
        }
        super();
        this.dog = dog;
    }

    roar() {
        this.dog.bark();
    }

}
class Hunter {
    hunt(lion) {
        if (!(lion instanceof Lion)) {
            throw new TypeError("Param must be a Lion");
        }
    }
}

const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);

const hunter = new Hunter();
hunter.hunt(wildDogAdapter);