"use strict";
function *foo() {
    let x = yield;
    console.log(x);
}
let it = foo();
it.next();
bar();
function bar() {
    setTimeout(function () {
        it.next(7);
    }, 0);
}