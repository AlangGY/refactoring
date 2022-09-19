import { HeatingPlan } from "../temperature";

const aRoom = {
  daysTempRange: {
    low: 20,
    high: 30,
  },
};

const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;

const alert = jest.fn(() => {});

const alertIfTemperatureOutOfRange = (heatingPlan) => {
  if (!heatingPlan.withinRange(low, high)) {
    alert();
  }
};

afterEach(() => {
  alert.mockClear();
});

describe("heating plan", () => {
  test("10 ~ 15", () => {
    const aPlan = new HeatingPlan({ low: 10, high: 15 });
    alertIfTemperatureOutOfRange(aPlan);
    expect(alert).toHaveBeenCalled();
  });

  test("10 ~ 30", () => {
    const aPlan = new HeatingPlan({ low: 10, high: 30 });
    alertIfTemperatureOutOfRange(aPlan);
    expect(alert).not.toHaveBeenCalled();
  });
});
