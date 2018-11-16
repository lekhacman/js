"use strict";
const _rest = require("lodash/fp/rest");

let a = 2;
let b = 3;

const args = _rest(values => values);

console.log(args(a, b));