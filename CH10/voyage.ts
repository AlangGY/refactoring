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
  constructor(protected voyage: Voyage, protected history: History[]) {
    this.voyage = voyage;
    this.history = history;
  }

  get value() {
    // 투자 등급
    const vpf = this.voyageProfitFactor;
    const vr = this.voyageRisk;
    const chr = this.captainHistoryRisk;
    console.log(vpf * 3, vr + chr * 2);
    if (vpf * 3 > vr + chr * 2) return "A";
    else return "B";
  }

  protected get voyageProfitFactor() {
    // 수익 요인
    let result = 2;
    result += this.historyLengthFactor;
    result += this.voyageLengthFactor;
    result += this.voyageZoneFactor;
    return result;
  }

  protected get voyageRisk() {
    // 항해 경로 위험요소
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if (["중국", "동인도"].includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }

  protected get captainHistoryRisk() {
    // 선장의 항해 이력 위험 요소
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter((v) => v.profit < 0).length;
    return Math.max(result, 0);
  }

  protected abstract historyLengthFactor: number;
  protected abstract voyageLengthFactor: number;
  protected abstract voyageZoneFactor: number;
}

class Rating extends RatingAbstract {
  protected get voyageZoneFactor() {
    let result = 0;
    if (this.voyage.zone === "중국") result += 1;
    if (this.voyage.zone === "동인도") result += 1;
    return result;
  }

  protected get historyLengthFactor() {
    return this.history.length > 8 ? 1 : 0;
  }

  protected get voyageLengthFactor(): number {
    return this.voyage.length > 14 ? -1 : 0;
  }
}

class ExperiencedChinaRating extends Rating {
  protected get captainHistoryRisk() {
    const result = super.captainHistoryRisk - 2;
    return Math.max(result, 0);
  }

  protected get voyageProfitFactor() {
    return super.voyageProfitFactor + 3;
  }

  protected get historyLengthFactor() {
    return this.history.length > 10 ? 1 : 0;
  }

  protected get voyageLengthFactor() {
    let result = 0;
    if (this.voyage.length > 12) result += 1;
    if (this.voyage.length > 18) result -= 1;
    return result;
  }
}
