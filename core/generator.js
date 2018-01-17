"use strict";
function delay1sec(s) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(s);
        }, 1000);
    });
}
function *foo() {
    while (true) {
        delay1sec(yield ).then(success);
    }
}
let it = foo();
it.next();
function success(x) {
    x++;
    it.next();
}