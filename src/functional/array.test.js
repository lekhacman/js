const ManArray = require("./array");

test(".forEach", () => {
    const array = new ManArray(["Le", "Khac", "Man"]);

    const result = {};

    array.forEach((item, index) => (result[index] = item));

    expect(result).toEqual({
        0: "Le",
        1: "Khac",
        2: "Man"
    });
});

test(".reduce", () => {
    const array = new ManArray([
        {
            value: 3
        },
        {
            value: 4
        },
        {
            value: 5
        }
    ]);
    expect(array.reduce((acc, obj) => acc + obj.value, 0)).toEqual(12);

    const another = new ManArray([3, 4, 5]);
    expect(another.reduce((acc, value) => acc + value)).toEqual(12);
});
