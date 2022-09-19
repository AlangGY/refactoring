function usd(number) {
  return Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  }).format(number);
}

function withinBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

export function baseCharge(usage) {
  if (usage < 0) return usd(0);
  const amount =
    withinBand(usage, 0, 100) * 0.03 +
    withinBand(usage, 100, 200) * 0.05 +
    withinBand(usage, 200, Infinity) * 0.07;

  return usd(amount);
}
