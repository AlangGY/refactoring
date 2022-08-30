export function plumages(birds) {
  return new Map(birds.map((b) => [b.name, plumage(b)]));
}

export function speeds(birds) {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  return createBird(bird).plumage;
}

function airSpeedVelocity(bird) {
  return createBird(bird).airSpeedVelocity;
}

function createBird(bird) {
  switch (bird.type) {
    case "유럽 제비":
      return new EuropeanSwallow(bird);
    case "아프리카 제비":
      return new AfricanSwallow(bird);
    case "노르웨이 파랑 앵무":
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    // 깃털 상태
    switch (this.type) {
      case "유럽 제비":
        throw new Error("Method not implemented");
      case "아프리카 제비":
        throw new Error("Method not implemented");
      case "노르웨이 파랑 앵무":
        throw new Error("Method not implemented");
      default:
        return "알수 없다";
    }
  }

  get airSpeedVelocity() {
    // 비행 속도
    switch (this.type) {
      case "유럽 제비":
        return 35;
      case "아프리카 제비":
        return 40 - 2 * this.numberOfCoconuts;
      case "노르웨이 파랑 앵무":
        return this.isNailed ? 0 : 10 + this.voltage / 10;
      default:
        return null;
    }
  }
}

class EuropeanSwallow extends Bird {
  get plumage() {
    return "보통이다";
  }
}

class AfricanSwallow extends Bird {
  get plumage() {
    return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
  }
}

class NorwegianBlueParrot extends Bird {
  get plumage() {
    return this.voltage > 100 ? "그을렸다" : "예쁘다";
  }
}
