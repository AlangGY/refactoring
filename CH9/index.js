export function distanceTraveled(scenario, time) {
  let result;
  const primaryAcceleration = acceleration(
    scenario.primaryForce,
    scenario.mass
  ); // F = ma_1
  const primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 1/2 * a * t^2
  const secondaryTime = time - scenario.delay; // 두번쨰 힘 이후 소요된 시간
  if (secondaryTime > 0) {
    const primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration = acceleration(
      scenario.primaryForce + scenario.secondaryForce,
      scenario.mass
    ); // (F1 + F2) = ma_2
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }

  return result;

  function acceleration(force, mass) {
    return force / mass;
  }
}
