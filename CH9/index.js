export function distanceTraveled(
  { primaryForce, secondaryForce, mass, delay },
  time
) {
  const primaryTime = Math.min(time, delay);
  const secondaryTime = time - delay; // 두번쨰 힘 이후 소요된 시간
  const primaryAcceleration = acceleration(primaryForce, mass);
  const secondaryAcceleration = acceleration(
    primaryForce + secondaryForce,
    mass
  );
  return (
    distanceBy(0, primaryAcceleration, primaryTime) +
    distanceBy(
      velocity(primaryAcceleration, delay),
      secondaryAcceleration,
      secondaryTime
    )
  );

  function acceleration(force, mass) {
    // a = F / m
    return force / mass;
  }

  function velocity(acceleration, time) {
    // v = a * t
    return acceleration * time;
  }

  function distanceBy(initialVelocity, acceleration, time) {
    if (time <= 0) return 0;

    return initialVelocity * time + 0.5 * acceleration * time * time;
  }
}
