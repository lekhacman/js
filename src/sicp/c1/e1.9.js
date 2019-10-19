module.exports = {
    procedure1,
    procedure2
};

function procedure1(a, b) {
    return increase(decrease(a) + b);
}

function procedure2(a, b) {
    return decrease(a) + increase(b);
}

function increase(x) {
    return x + 1;
}

function decrease(x) {
    return x - 1;
}
