"use strict";
// All for One
function unary(fn) {
    return function onlyOneArg(arg) {
        return fn(arg);
    };
}

// One on One
function identity(v) {
    return v;
}

// Unchaining One
function constant(v) {
    return function value() {
        return v;
    };
}

// Adapting arguments to Parameters
function speadArgs(fn) {
    return function spreadFn(argsArr) {
        return fn(...argsArr);
    };
}

function gatherArgs(fn) {
    return function gatherFn(...argsArr) {
        return fn(argsArr);
    };
}
function combineFirstTwo([v1, v2]) {
    return v1 + v2;
}

// Some Now, Some Later

function partial(fn, ...presetArgs) {
    return function partiallyApplied(...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    };
}

// Reversing arguments
function reverseArgs(fn) {
    return function reverseFn(...args) {
        return fn(...args.reverse());
    };
}

function partialRight(fn, ...presetArgs) {
    return function partiallyApplied(...laterArgs) {
        return fn(...laterArgs, ...presetArgs);
    };
}

// One at a time