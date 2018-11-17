const fib = require("./fibonacci");
test("Fibonacci", () => {
    expect(fib.fibonacci(0)).toEqual(0);
    expect(fib.fibonacci(1)).toEqual(1);
    expect(fib.fibonacci(2)).toEqual(1);
    expect(fib.fibonacci(3)).toEqual(2);
    expect(fib.fibonacci(4)).toEqual(3);
    expect(fib.fibonacci(8)).toEqual(21);
});
