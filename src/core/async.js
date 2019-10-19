'use strict';

let a = 5;
setTimeout(function() {
  a += 3;
  console.log(a);
}, 2000);
setTimeout(function() {
  a += 7;
  console.log(a);
}, 0);

console.log(a);
