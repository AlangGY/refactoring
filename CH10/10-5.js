export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === "미확인 고객"
      ? new UnknownCustomer()
      : this._customer;
  }
}

export class Customer {
  constructor({ ...args }) {
    this._name = args.name;
    this._billingPlan = args.billingPlan;
    this._paymentHistory = {
      weeksDelinquentInLastYear: 3,
    };
  }

  get name() {
    return this._name;
  }
  get billingPlan() {
    return this._billingPlan;
  }
  set billingPlan(arg) {
    this._billingPlan = arg;
  }

  get paymentHistory() {
    return this._paymentHistory;
  }

  get isUnknown() {
    return false;
  }
}

export class UnknownCustomer {
  get isUnknown() {
    return true;
  }
}
