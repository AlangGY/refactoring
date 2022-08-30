interface Voyage {
  zone: string;
  length: number;
}

interface History {
  zone: string;
  profit: number;
}

export function rating(voyage: Voyage, history: History[]) {
  return createRating(voyage, history).value;
}

function createRating(voyage: Voyage, history: History[]) {
  if (voyage.zone === "중국" && history.some((v) => v.zone === "중국")) {
    return new ExperiencedChinaRating(voyage, history);
  }
  return new Rating(voyage, history);
}

abstract class RatingAbstract {
  constructor(public voyage: Voyage, public history: History[]) {
    this.voyage = voyage;
    this.history = history;
  }
}

class Rating extends RatingAbstract {
  get value() {
    // 투자 등급
    const vpf = this.voyageProfitFactor;
    const vr = this.voyageRisk;
    const chr = this.captainHistoryRisk;
    console.log(vpf * 3, vr + chr * 2);
    if (vpf * 3 > vr + chr * 2) return "A";
    else return "B";
  }

  get voyageRisk() {
    // 항해 경로 위험요소
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if (["중국", "동인도"].includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    // 선장의 항해 이력 위험 요소
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter((v) => v.profit < 0).length;
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    // 수익 요인
    let result = 2;
    if (this.voyage.zone === "중국") result += 1;
    if (this.voyage.zone === "동인도") result += 1;
    result += this.historyLengthFactor;
    result += this.voyageLengthFactor;
    return result;
  }

  get hasChinaHistory() {
    return this.history.some((v) => "중국" === v.zone);
  }

  get historyLengthFactor() {
    return this.history.length > 8 ? 1 : 0;
  }

  get voyageLengthFactor(): number {
    return this.voyage.length > 14 ? -1 : 0;
  }
}

class ExperiencedChinaRating extends Rating {
  get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    return super.voyageProfitFactor + 3;
  }

  get historyLengthFactor() {
    return this.history.length > 10 ? 1 : 0;
  }

  get voyageLengthFactor() {
    let result = 0;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result;
  }
}
