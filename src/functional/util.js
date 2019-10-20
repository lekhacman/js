export function of(type) {
  return function(value) {
    return type(function() {
      return value;
    });
  };
}
