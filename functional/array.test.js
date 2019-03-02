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
