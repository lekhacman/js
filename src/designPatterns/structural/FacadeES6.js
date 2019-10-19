"use strict";

/**
 * How do you turn on the computer? "Hit the power button" you say!
 * That is what you believe because you are using a simple interface
 * that computer provides on the outside, internally it has to do a
 * lot of stuff to make it happen. This simple interface to the complex
 * subsystem is a facade.
 *
 * Facade pattern provides a simplified interface to a complex subsystem.
 *
 * A facade is an object that provides a simplified interface to a larger
 * body of code, such as a class library.
 */

class Computer {
    getElectricShock() {
        console.log("Ouch!");
    }

    makeSound() {
        console.log("Beep beep!");
    }

    showLoadingScreen() {
        console.log("Loading..");
    }

    bam() {
        console.log("Ready to be used!");
    }

    closeEverything() {
        console.log("Bup bup bup buzzzz!");
    }

    sooth() {
        console.log("Zzzzz");
    }

    pullCurrent() {
        console.log("Haaah!");
    }

}

class ComputerFacade {
    constructor(computer) {
        if (!(computer instanceof Computer)) {
            throw new TypeError("Param must be a Computer");
        }
        this.computer = computer;
    }

    turnOn() {
        this.computer.getElectricShock();
        this.computer.makeSound();
        this.computer.showLoadingScreen();
        this.computer.bam();
    }

    turnOff() {
        this.computer.closeEverything();
        this.computer.pullCurrent();
        this.computer.sooth();
    }
}

const computer = new ComputerFacade(new Computer());
computer.turnOn();
computer.turnOff();