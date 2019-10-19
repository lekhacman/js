'use strict';
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

// Curry technique
function curry(fn, arity = fn.length) {
  return (function nextCurried(prevArgs) {
    return function curried(nextArg) {
      const args = [...prevArgs, nextArg];

      if (args.length >= arity) {
        return fn(...args);
      }

      return nextCurried(args);
    };
  })([]);
}

function looseCurry() {
  return (function nextCurried(prevArgs) {
    return function curried(...nextArg) {
      const args = [...prevArgs, ...nextArg];

      if (args.length >= arity) {
        return fn(...args);
      }

      return nextCurried(args);
    };
  })([]);
}

function uncurry(fn) {
  return function uncurried(...args) {
    let ret = fn;

    for (let arg of args) {
      ret = ret(arg);
    }

    return ret;
  };
}

function foo(x, y, z) {
  console.log(x + y + z);
}

curry(foo)(3)(4)(5);
