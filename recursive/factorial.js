module.exports = {
    linearFactorial,
    iterativeFactorial
};

function linearFactorial(x) {
    throwIfNegative(x);

    if (x <= 1) {
        return 1;
    }

    return x * linearFactorial(x-1);
}

function iterativeFactorial(x) {
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
