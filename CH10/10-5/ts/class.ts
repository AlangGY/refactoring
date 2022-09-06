const registry = {
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

abstract class CustomerAbs {
  abstract readonly name: string;
  abstract billingPlan: number;
  abstract paymentHistory: PaymentHistory;
}

export class Customer extends CustomerAbs {
  private _name: string;
  private _billingPlan: number;
  private _paymentHistory: PaymentHistory;

  constructor({ name, billingPlan }: { name: string; billingPlan: number }) {
    super();
    this._name = name;
    this._billingPlan = billingPlan;
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

export class UnknownCustomer extends CustomerAbs {
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
