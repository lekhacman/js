"use strict";
class Bulb {

    turnOn() {
        console.log("Bulb has been lit!");
    }

    turnOff() {
        console.log("Darkness!");
    }

}

class Command {
    constructor(bulb) {
        if (!(bulb instanceof Bulb)) {
            throw new TypeError();
        }
        this.bulb = bulb;
    }

    execute() {
        throw new Error("Override is missing");
    }

    undo() {
        throw new Error("Override is missing");
    }

    redo() {
        throw new Error("Override is missing");
    }

}

class TurnOn extends Command {

    constructor(bulb) {
        super(bulb);
    }

    execute() {
        this.bulb.turnOn();
    }

    undo() {
        this.bulb.turnOff();
    }

    redo() {
        this.bulb.execute();
    }

}

class TurnOff extends Command {

    constructor(bulb) {
        super(bulb);
    }

    execute() {
        this.bulb.turnOff();
    }

    undo() {
        this.bulb.turnOn();
    }

    redo() {
        this.bulb.execute();
    }

}

class RemoteControl {

    submit(command) {
        command.execute();
    }

}

const bulb = new Bulb();

const turnOn = new TurnOn(bulb);
const turnOff = new TurnOff(bulb);

const remote = new RemoteControl();
remote.submit(turnOn);
remote.submit(turnOff);