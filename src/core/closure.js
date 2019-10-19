'use strict';
function foo() {
  for (var i = 0; i < 6; i++) {
    (function(j) {
      setTimeout(function() {
        console.log(j);
      }, 1000);
    })(i);
  }
}

foo();
