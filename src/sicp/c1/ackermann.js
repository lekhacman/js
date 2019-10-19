module.exports = { ackermann, ack };

function ackermann(x, y) {
  if (x === 0) {
    return y + 1;
  }

  if (y === 0) {
    return ackermann(x - 1, 1);
  }

  return ackermann(x - 1, ackermann(x, y - 1));
}

function ack(m, n) {
  return m === 0 ? n + 1 : ack(m - 1, n === 0 ? 1 : ack(m, n - 1));
}
