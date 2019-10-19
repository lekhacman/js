'use strict';
const foo = {
  data: {
    name: null,
  },
  init: function(who) {
    this.data.name = who;
  },
  identify: function() {
    return `I am ${this.data.name}`;
  },
};

const bar = Object.create(foo);

bar.speak = function() {
  console.log(`Hello, ${this.identify()}.`);
};

const b1 = Object.create(bar);
b1.init('b1');
const b2 = Object.create(bar);
b2.init('b2');

b1.speak();
b2.speak();
