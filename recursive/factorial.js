module.exports = {
    linearFactorial
};

function linearFactorial(x) {
    if (x < 0) {
        throw "Input must be a positive integer!";
    }
    if (x <= 1) {
        return 1;
    }

    return x * linearFactorial(x-1);
}
