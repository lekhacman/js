'use strict';

const x = 2;
const obj = {
  a: 3,
  b: 4,
};
Object.freeze(obj);
// obj.a = 5;

console.log(x);
console.log(obj);
