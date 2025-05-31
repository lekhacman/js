export default function maxProfit(prices) {
  let min = Infinity;
  let profit = 0;
  prices.forEach(function (price) {
    if (price < min) {
      min = price;
    } else {
      const newProfit = price - min;
      if (newProfit > profit) {
        profit = newProfit;
      }
    }
  });

  return profit === -Infinity ? 0 : profit;
}
