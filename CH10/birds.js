export function plumages(birds) {
  return new Map(birds.map((b) => [b.name, plumage(b)]));
}

export function speeds(birds) {
  return new Map(birds.map((b) => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) {
  return new Bird(bird).plumage();
}

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  plumage() {
    // 깃털 상태
    switch (this.type) {
      case "유럽 제비":
        return "보통이다";
      case "아프리카 제비":
        return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
      case "노르웨이 파랑 앵무":
        return this.voltage > 100 ? "그을렸다" : "예쁘다";
      default:
        return "알수 없다";
    }
  }

  airSpeedVelocity() {
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

function airSpeedVelocity(bird) {
  return new Bird(bird).airSpeedVelocity();
}