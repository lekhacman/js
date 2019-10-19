"use strict";
function memoize(f) {
    var cache = {};

    return function () {
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        if (key in cache) {
            return cache[key];
        } else {
            cache[key] = f.apply(this, arguments);
            return cache[key];
        }
    };
}

let factorial = memoize(function (n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
});

function MathService() {
    this.factorialCache = [];
    this.fiboCache = {};
}
MathService.prototype.tabuFactorial = function tabuFactorial(x) {
    let result;
    if (x <= this.factorialCache.length - 1) {
        return this.factorialCache[x];
    } else {
        for (let i = this.factorialCache.length; i <= x; i++) {
            if (i <= 1) {
                result = 1;
            } else {
                result = this.factorialCache[i-1] * i;
            }

            this.factorialCache[i] = result;
        }
    }
    return result;
};

MathService.prototype.factorial = function factorial(x) {
    let cache = this.factorialCache;
    if (x in cache) {
        return cache[x];
    } else {
        if (x <= 1) {
            return 1;
        } else {
            let result = x * factorial.apply(this, [x-1]);
            cache[x] = result;
            return result;
        }
    }
};

MathService.prototype.fibonacci = function fibonacci(x) {
    let cache = this.fiboCache;
    if (x in cache) {
        return cache[x];
    } else {
        if (x <= 1) {
            return x;
        } else {
            let result = fibonacci.apply(this, [x-1]) + fibonacci.apply(this, [x-2]);
            cache[x] = result;
            return result;
        }
    }
};

let math = new MathService();
console.log(math.tabuFactorial(5));
console.log(math.tabuFactorial(7));
console.log(math.tabuFactorial(7));
console.log(math.tabuFactorial(8));

// console.log(math.fibonacci(5));
// console.log(math.fibonacci(9));
