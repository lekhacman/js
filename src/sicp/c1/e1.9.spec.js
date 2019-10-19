const procedure = require("./e1.9");
test("iterative vs retursive", () => {
    const cases = [
        {
            a: 1,
            b: 2,
            expect: 3
        },
        {
            a: 4,
            b: 5,
            expect: 9
        },
        {
            a: 7,
            b: 12,
            expect: 19
        }
    ];
    cases.forEach(c => {
        const procedure1Result = procedure.procedure1(c.a, c.b);
        expect(procedure1Result)
            .toEqual(procedure.procedure2(c.a, c.b));
        expect(procedure1Result).toEqual(c.expect);
    });
});
