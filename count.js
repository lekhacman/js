"use strict";
function delay1sec(d) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(d);
        }, 1000);
    });
}
function *org() {
    let d = 1;
    while (d <= 10) {
        d = yield delay1sec(d).then((num) => {
            console.log(num);
            num++;
            it.next(num);
        });
    }
}
let it = org();
it.next();
let it2 = org();
it2.next();