module.exports = ManArray;

function ManArray(array) {
  this.value = array;
}

ManArray.prototype.forEach = function(fn) {
  if (typeof fn !== 'function') {
    return TypeError(`${fn} is not a function`);
  }

  for (let i = 0; i < this.value.length; i++) {
    fn(this.value[i], i);
  }
};

ManArray.prototype.reduce = function(fn, initialValue) {
  let result;

  const array = new ManArray(this.value);
  result = initialValue !== undefined ? initialValue : array.shift();
  array.forEach(item => {
    result = fn(result, item);
  });

  return result;
};

ManArray.prototype.shift = function() {
  if (this.value.length > 0) {
    const newValue = [];
    const returnValue = this.value[0];
    for (let i = 1; i < this.value.length; i++) {
      newValue.push(this.value[i]);
    }

    this.value = newValue;

    return returnValue;
  }
};
