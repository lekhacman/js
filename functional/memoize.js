"use strict";
const crc = require("crc");

function hash(args) {
    const string = JSON.stringify(args);
    return crc.crc32(string).toString(16);
}

function memoize(fn, hashFn = hash) {
    const cache = new Map();

    function invoker(...args) {
        const key = hashFn(args);
        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
    invoker.cache = cache;
    invoker.hash = hash;

    return invoker;
}

module.exports = memoize;