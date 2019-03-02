module.exports = ManArray;

function ManArray(array) {
    this.value = array;
}

ManArray.prototype.forEach = function(fn) {
    if (typeof fn !== "function") {
        return TypeError(`${fn} is not a function`);
    }
    for (let i = 0; i < this.value.length; i++) {
        fn(this.value[i], i);
    }
};
