import { acceleration, distance, velocity } from "./utils/kineticEquations";

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
    distance(0, primaryAcceleration, primaryTime) +
    distance(
      velocity(primaryAcceleration, delay),
      secondaryAcceleration,
      secondaryTime
    )
  );
}
