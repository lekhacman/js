'use strict';
function forEach(list, fn) {
  for (const i of list) {
    fn(i);
  }
}

let arr = [1, 2, 3, 4, 5];
forEach(arr, function(item) {
  item += 1;
  console.log(item);
});

console.log(`Array: ${arr}`);
