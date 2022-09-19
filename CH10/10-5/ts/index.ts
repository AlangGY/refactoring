import { NullPaymentHistory } from "./model/paymentHistory";

class UnknownCustomer {
  get paymentHistory() {
    return new NullPaymentHistory();
  }
}
