import { acceleration, distance, velocity } from "./utils/kineticEquations";

export function distanceTraveled(
  { initialVelocity = 0, primaryForce, secondaryForce, mass, delay },
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
    distance(initialVelocity, primaryAcceleration, primaryTime) +
    distance(
      initialVelocity + velocity(primaryAcceleration, delay),
      secondaryAcceleration,
      secondaryTime
    )
  );
}
