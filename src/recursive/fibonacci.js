module.exports = { fibonacci, iterFibonacci };

/**
 * Iterative process
 * @param x
 * @return {number}
 */
function iterFibonacci(x) {
    let result = 0;
    let a = 0;
    let b = 1;

    for (let i = 1; i <= x; i++) {
        result = a + b;

        const mem = a;
        a += b;
        b = mem;
    }
    return result;
}

/**
 * Tree recursive process
 * @param x
 * @return {*}
 */
function fibonacci(x) {
    if (x <= 1) {
        return x;
    }

    return fibonacci(x - 1) + fibonacci(x - 2);
}
