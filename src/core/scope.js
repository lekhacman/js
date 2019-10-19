'use strict';
{
  var x = 2;
}

// console.log(x);
const nums = [1, 2, 3, 4, 5];
for (const i of nums) {
  setTimeout(function() {
    console.log(i);
  }, 0);
}
