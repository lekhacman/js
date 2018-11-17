const pascal = require("./pascalTriangle");
test("Pascal's triangle", () => {
    const cases = [
        {
            line: 1,
            expect: [1]
        },
        {
            line: 2,
            expect: [1, 1]
        },
        {
            line: 3,
            expect: [1, 2, 1]
        },
        {
            line: 4,
            expect: [1, 3, 3, 1]
        },
        {
            line: 5,
            expect: [1, 4, 6, 4, 1]
        },
        {
            line: 6,
            expect: [1, 5, 10, 10, 5, 1]
        }
    ];

    cases.forEach(c => {
        const result = pascal.pascalTriangle(c.line);

        expect(result.length).toEqual(c.expect.length);

        for (let i = 0; i < result.length; i++) {
            expect(result[i]).toEqual(c.expect[i]);
        }
    });
});

test("Pascal's triangle by position", () => {
    const cases = [
        {
            row: 1,
            index: 0,
            expect: 1
        },
        {
            row: 2,
            index: 0,
            expect: 1
        },
        {
            row: 2,
            index: 1,
            expect: 1
        },
        {
            row: 4,
            index: 1,
            expect: 3
        },
        {
            row: 6,
            index: 3,
            expect: 10
        }
    ];

    cases.forEach(c => {
        expect(pascal.triangleElement(c.row, c.index)).toEqual(c.expect);
    });
});
