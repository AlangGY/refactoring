abstract class Party {
  abstract monthlyCost: number;

  get annualCost() {
    return this.monthlyCost * 12;
  }
}

export class Employee extends Party {
  monthlyCost = 1;
}

export class Department extends Party {
  monthlyCost = 2;
}
