'use strict';
let Benchmark = require('benchmark');
function foo() {
  setTimeout(() => {
    setTimeout(() => {
      console.log(this.a);
    }, 100);
  }, 1000);
  // setTimeout(function () {
  //     console.log(this.a);
  // }, 1000);
}

var obj1 = {
  a: 2,
};

foo.call(obj1);

let benchOptions = {
  async: false,
  defer: false,
  delay: 0.005,
  id: undefined,
  initCount: 1,
  maxTime: 5,
  minSamples: 5,
  minTime: 0.05,
  name: undefined,
  onAbort: undefined,
  onComplete: function() {
    console.log(bench.stats);
  },
  onCycle: undefined,
  onError: undefined,
  onReset: undefined,
  onStart: undefined,
};
let bench = new Benchmark(foo);
bench.run();
// yeah
console.log(bench.stats);
