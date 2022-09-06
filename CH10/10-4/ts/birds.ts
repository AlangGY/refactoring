interface Bird {
  name: string;
  type: string;
  numberOfCoconuts: number;
  voltage: number;
  isNailed: boolean;
}

export function plumages(birds: Bird[]) {
  return new Map(
    birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.plumage])
  );
}

export function speeds(birds: Bird[]) {
  return new Map(
    birds
      .map((b) => createBird(b))
      .map((bird) => [bird.name, bird.airSpeedVelocity])
  );
}

function createBird(bird: Bird) {
  switch (bird.type) {
    case "유럽 제비":
      return new EuropeanSwallow(bird);
    case "아프리카 제비":
      return new AfricanSwallow(bird);
    case "노르웨이 파랑 앵무":
      return new NorwegianBlueParrot(bird);
    default:
      return new UnknownBird(bird);
  }
}

abstract class BirdAbstract {
  name: string;
  type: string;
  protected numberOfCoconuts: number;
  protected voltage: number;
  protected isNailed: boolean;

  constructor(birdObject: Bird) {
    this.name = birdObject.name;
    this.type = birdObject.type;
    this.numberOfCoconuts = birdObject.numberOfCoconuts;
    this.voltage = birdObject.voltage;
    this.isNailed = birdObject.isNailed;
  }

  abstract get plumage(): string;

  abstract get airSpeedVelocity(): number | null;
}

class UnknownBird extends BirdAbstract {
  get plumage() {
    return "알수 없다";
  }

  get airSpeedVelocity(): number | null {
    return null;
  }
}

class EuropeanSwallow extends BirdAbstract {
  get plumage() {
    return "보통이다";
  }

  get airSpeedVelocity() {
    return 35;
  }
}

class AfricanSwallow extends BirdAbstract {
  get plumage() {
    return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
  }

  get airSpeedVelocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}

class NorwegianBlueParrot extends BirdAbstract {
  get plumage() {
    return this.voltage > 100 ? "그을렸다" : "예쁘다";
  }

  get airSpeedVelocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}
