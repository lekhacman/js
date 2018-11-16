const factorial = require("./factorial");
describe("Factorial", () => {
    test(".linearFactorial", () => {
        expect(factorial.linearFactorial(0)).toEqual(1);
        expect(factorial.linearFactorial(1)).toEqual(1);
        expect(factorial.linearFactorial(2)).toEqual(2);
        expect(factorial.linearFactorial(3)).toEqual(6);
        expect(factorial.linearFactorial(6)).toEqual(720);
    });

    test(".linearFactorial error", () => {
        expect(() => {
            factorial.linearFactorial(-5);
        }).toThrow();
    });
});
