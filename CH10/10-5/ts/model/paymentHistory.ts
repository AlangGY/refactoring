export interface PaymentHistory {
  abc: number;
}

export class NullPaymentHistory implements PaymentHistory {
  abc: number;
  constructor() {
    this.abc = 0;
  }
}
