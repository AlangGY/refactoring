import { distanceTraveled } from "..";

describe("distance traveled", () => {
  test("중량이 5인 물체가, 첫번째 힘이 20으로 10초간, 두번째 힘이 10이고, 5초때 주어졌을때 총 이동거리", () => {
    const scenario = {
      primaryForce: 20,
      secondaryForce: 10,
      mass: 5,
      delay: 5,
    };
    const totalTime = 10;
    expect(distanceTraveled(scenario, totalTime)).toEqual(225);
  });

  test("두번째 힘이 가해진 시각이 총 시간보다 뒤라면, 첫번쨰 힘이 가해진 상황만 고려된다", () => {
    const scenario = {
      primaryForce: 20,
      secondaryForce: 10,
      mass: 5,
      delay: 15,
    };
    const totalTime = 10;
    expect(distanceTraveled(scenario, totalTime)).toEqual(200);
  });
});
