class Party {}

export class Employee extends Party {
  monthlyCost = 1;

  get annualCost() {
    return this.monthlyCost * 12;
  }
}

export class Department extends Party {
  monthlyCost = 2;

  get totalAnnualCost() {
    return this.monthlyCost * 12;
  }
}
