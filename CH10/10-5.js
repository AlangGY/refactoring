export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer;
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

class UnknownCustomer {
  get isUnknown() {
    return true;
  }
}

function isUnknown(arg) {
  if (!(arg instanceof Customer || arg === "미확인 고객"))
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  return arg === "미확인 고객";
}
