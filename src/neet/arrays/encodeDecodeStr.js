export function encode(strings) {
  return strings.join(':;');
}

export function decode(str) {
  return str.split(':;');
}
