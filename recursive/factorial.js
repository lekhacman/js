module.exports = {
    linearFactorial,
    iterFactorial
};

function linearFactorial(x) {
    throwIfNegative(x);

    if (x <= 1) {
        return 1;
    }

    return x * linearFactorial(x-1);
}

function iterFactorial(x) {
    throwIfNegative(x);

    let result = 1;
    for (let i = 1; i <= x; i++) {
        result *= i;
    }
    return result;
}

function throwIfNegative(x) {
    if (x < 0) {
        throw "Input must be a positive integer!";
    }
}
