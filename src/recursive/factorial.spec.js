const factorial = require('./factorial');
describe('Factorial', () => {
  test('.linearFactorial', () => {
    expect(factorial.linearFactorial(0)).toEqual(1);
    expect(factorial.linearFactorial(1)).toEqual(1);
    expect(factorial.linearFactorial(2)).toEqual(2);
    expect(factorial.linearFactorial(3)).toEqual(6);
    expect(factorial.linearFactorial(6)).toEqual(720);
  });

  test('.linearFactorial error', () => {
    expect(() => {
      factorial.linearFactorial(-5);
    }).toThrow();
  });

  test('.iterativeFactorial', () => {
    expect(factorial.iterativeFactorial(0)).toEqual(1);
    expect(factorial.iterativeFactorial(1)).toEqual(1);
    expect(factorial.iterativeFactorial(2)).toEqual(2);
    expect(factorial.iterativeFactorial(3)).toEqual(6);
    expect(factorial.iterativeFactorial(6)).toEqual(720);
  });

  test('.iterativeFactorial error', () => {
    expect(() => {
      factorial.iterativeFactorial(-5);
    }).toThrow();
  });
});
