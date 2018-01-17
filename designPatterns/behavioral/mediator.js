"use strict";
class ChatRoomMediator {

    showMessage(user, message) {
        throw new Error("Override is missing");
    }

}

class ChatRoom extends ChatRoomMediator {

    showMessage(user, message) {
        const time = new Date().toISOString();
        const sender = user.name;

        console.log(`${time} [${sender}]: ${message}`);
    }

}

class User {

    constructor(name, chatMediator) {
        this.name = name;
        this.chatMediator = chatMediator;
    }

    send(message) {
        this.chatMediator.showMessage(this, message);
    }

}

const mediator = new ChatRoom();

const john = new User("John Doe", mediator);
const mary = new User("Mary Lou", mediator);

john.send("Hi there!");

setTimeout(() => {
    mary.send("Hey!");
}, 1000);