"use strict";
const crc = require("crc");
function hash(args) {
    const string = JSON.stringify(args);
    return crc.crc32(string).toString(16);
}

function memoize(fn, hashFn = hash) {
    const cache = new Map();

    return function invoker(...args) {
        const key = hashFn(args);
        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const square = memoize((n) => {
    return n*n;
});

console.log(`${square(2)}\n${square(3)}\n${square(2)}`);