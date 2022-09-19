type TemperatureRange = {
  low: number;
  high: number;
};

export class HeatingPlan {
  constructor(private temperatureRange: TemperatureRange) {}

  withinRange(aNumberRange: TemperatureRange) {
    return (
      aNumberRange.low >= this.temperatureRange.low &&
      aNumberRange.high <= this.temperatureRange.high
    );
  }
}
