import { acceleration, distance } from "./utils/kineticEquations";

export function distanceTraveled(
  { initialVelocity = 0, primaryForce, secondaryForce, mass, delay },
  time
) {
  const primaryTime = Math.min(time, delay);
  const secondaryTime = time - delay; // 두번쨰 힘 이후 소요된 시간
  return (
    distance(initialVelocity, acceleration(primaryForce, mass), primaryTime) +
    distance(
      initialVelocity + acceleration(primaryForce, mass) * delay,
      acceleration(primaryForce + secondaryForce, mass),
      secondaryTime
    )
  );
}
