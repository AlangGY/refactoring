export const registry = {
  billingPlans: {
    basic: 5,
  },
} as const;

type StrUnknownCustomer = "미확인 고객";

type PaymentHistory = {
  weeksDelinquentInLastYear: number;
};

export class Site {
  _customer: Customer | StrUnknownCustomer;

  constructor(customer: Customer | StrUnknownCustomer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === "미확인 고객"
      ? new UnknownCustomer()
      : this._customer;
  }
}

export class Customer {
  _name: string;
  _billingPlan: number;
  _paymentHistory: PaymentHistory;
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
}

export class UnknownCustomer {
  get name() {
    return "거주자";
  }

  get billingPlan() {
    return registry.billingPlans.basic;
  }
  set billingPlan(arg) {}

  get paymentHistory() {
    return new NullPaymentHistory();
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0;
  }
}
