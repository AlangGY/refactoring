import { Department, Employee } from "../Party";

describe("party", () => {
  test("", () => {
    expect(new Employee().annualCost).toBe(12);
  });

  test("", () => {
    expect(new Department().annualCost).toBe(24);
  });
});
