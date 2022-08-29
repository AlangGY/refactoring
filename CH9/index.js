export function distanceTraveled(scenario, time) {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // F = ma_1
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 1/2 * a * t^2
  let secondaryTime = time - scenario.delay; // 두번쨰 힘 이후 소요된 시간
  if (secondaryTime > 0) {
    let primaryVelocity = primaryAcceleration * scenario.delay;
    let acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass; // (F1 + F2) = ma_2
    result +=
      primaryVelocity * secondaryTime +
      0.5 * acc * secondaryTime * secondaryTime;
  }

  return result;
}
