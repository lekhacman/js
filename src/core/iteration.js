'use strict';

let arr = ['a', 'b', 'c'];
let obj = {
  a: 3,
  b: 4,
};

for (let i of arr) {
  console.log(i);
}
// failed
// for (let item of obj) {
//     console.log(item);
// }
