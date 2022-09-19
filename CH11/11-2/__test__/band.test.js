import { baseCharge } from "../band";

describe("base charge", () => {
  test("0", () => {
    expect(baseCharge(0)).toBe("US$0.00");
  });

  test("30", () => {
    expect(baseCharge(30)).toBe("US$0.90");
  });

  test("150", () => {
    expect(baseCharge(150)).toBe("US$5.50");
  });
});
