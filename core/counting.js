"use strict";
function delay1sec(s) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(s);
        }, 1000);
    });
}

function countTo10() {
    function success(s) {
        console.log(s);
        if (s < 10) {
            s++;
            delay1sec(s).then(success);
        }
    }

    return new Promise((resolve, reject) => {
        delay1sec(1).then(success);
    });
}
countTo10();
countTo10();