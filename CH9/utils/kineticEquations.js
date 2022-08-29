export function acceleration(force, mass) {
  // a = F / m
  return force / mass;
}

export function velocity(acceleration, time) {
  // v = a * t
  return acceleration * time;
}

export function distance(initialVelocity, acceleration, time) {
  // d = v * t + 1/2 * a * t^2
  if (time <= 0) return 0;

  return initialVelocity * time + 0.5 * acceleration * time * time;
}
