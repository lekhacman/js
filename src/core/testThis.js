'use strict';

function Foo(x) {
  this.a = x;
  console.log(`this.a = ${this.a}`);
}

const rootObj = {
  Foo,
};
const obj = {
  a: 5,
};
const fooRef = Foo.bind(obj);

const instance = new fooRef(3);
