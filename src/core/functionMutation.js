'use strict';
let obj = {
  a: 'Hello A',
  b: {
    x: 'Hello X',
  },
};

console.log(obj.a);

function mutate(input) {
  input.a = 'World A';
}

// mutate(obj);
Object.assign(obj.b, { y: 'hello Y' });
console.log(obj);
