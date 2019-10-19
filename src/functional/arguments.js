'use strict';
function foo(x, y = 2) {}

function bar(x, ...args) {}

function baz({ a, b }) {}

console.log(`${foo.length}\n${bar.length}\n${baz.length}`);
