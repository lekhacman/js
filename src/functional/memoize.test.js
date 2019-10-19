'use strict';
const BenchMark = require('benchmark');
const memoize = require('./memoize');

function rawFibonacci(n) {
  if (n <= 1) {
    return n;
  }

  return rawFibonacci(n - 1) + rawFibonacci(n - 2);
}

const fibonacci = memoize(n => fibonacci(n - 1) + fibonacci(n - 2));
fibonacci.cache.set(fibonacci.hash([0]), 0);
fibonacci.cache.set(fibonacci.hash([1]), 1);

const unary = fn => arg => fn(arg);
const list = [0, 1, 2, 5, 8, 9, 12, 6, 9, 22, 11];
function invokeRaw() {
  list.forEach(unary(rawFibonacci));
}

function invokeMem() {
  list.forEach(unary(fibonacci));
}

const suite = new BenchMark.Suite();
suite
  .add('raw', invokeRaw)
  .add('memoized', invokeMem)
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ async: true });
