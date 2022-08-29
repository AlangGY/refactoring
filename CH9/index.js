export function distanceTraveled(
  { primaryForce, secondaryForce, mass, delay },
  time
) {
  let result;
  const primaryAcceleration = acceleration(primaryForce, mass);
  const primaryTime = Math.min(time, delay);
  result = distance(primaryAcceleration, primaryTime);
  const secondaryTime = time - delay; // 두번쨰 힘 이후 소요된 시간
  if (secondaryTime > 0) {
    const primaryVelocity = primaryAcceleration * delay;
    const secondaryAcceleration = acceleration(
      primaryForce + secondaryForce,
      mass
    );
    result +=
      primaryVelocity * secondaryTime +
      distance(secondaryAcceleration, secondaryTime);
  }

  return result;

  function acceleration(force, mass) {
    // a = F / m
    return force / mass;
  }

  function distance(acceleration, time) {
    // 1/2 * a * t^2
    return 0.5 * acceleration * time * time;
  }
}
