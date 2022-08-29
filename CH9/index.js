export function distanceTraveled(
  { primaryForce, secondaryForce, mass, delay },
  time
) {
  let result;
  const primaryTime = Math.min(time, delay);
  result = distanceBy(0, acceleration(primaryForce, mass), primaryTime);
  const secondaryTime = time - delay; // 두번쨰 힘 이후 소요된 시간
  if (secondaryTime > 0) {
    const primaryVelocity = acceleration(primaryForce, mass) * delay;
    result += distanceBy(
      primaryVelocity,
      acceleration(primaryForce + secondaryForce, mass),
      secondaryTime
    );
  }

  return result;

  function acceleration(force, mass) {
    // a = F / m
    return force / mass;
  }

  function distanceBy(initialVelocity, acceleration, time) {
    return initialVelocity * time + 0.5 * acceleration * time * time;
  }
}
