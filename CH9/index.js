export function distanceTraveled(
  { primaryForce, secondaryForce, mass, delay },
  time
) {
  let result;
  const primaryAcceleration = acceleration(primaryForce, mass);
  const primaryTime = Math.min(time, delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 1/2 * a * t^2
  const secondaryTime = time - delay; // 두번쨰 힘 이후 소요된 시간
  if (secondaryTime > 0) {
    const primaryVelocity = primaryAcceleration * delay;
    const secondaryAcceleration = acceleration(
      primaryForce + secondaryForce,
      mass
    );
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }

  return result;

  function acceleration(force, mass) {
    // a = F / m
    return force / mass;
  }
}
