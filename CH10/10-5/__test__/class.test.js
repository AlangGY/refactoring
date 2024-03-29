import { Customer, registry, Site, UnknownCustomer } from "../js/class";

let site = new Site(new Customer({ name: "Alang", billingPlan: 4 }));
let site2 = new Site("미확인 고객");

beforeEach(() => {
  site = new Site(new Customer({ name: "Alang", billingPlan: 4 }));
  site2 = new Site("미확인 고객");
});

// Client 1

// .. codes..
describe("customer name", () => {
  test("known customer", () => {
    const aCustomer = site.customer;
    expect(aCustomer.name).toBe("Alang");
  });
  test("unknown customer", () => {
    const aCustomer = site2.customer;
    expect(aCustomer.name).toBe("거주자");
  });
});
// Client 2
describe("billing plan", () => {
  test("known customer", () => {
    const aCustomer = site.customer;
    expect(aCustomer.billingPlan).toBe(4);
  });

  test("unknown customer", () => {
    const aCustomer = site2.customer;
    expect(aCustomer.billingPlan).toBe(5);
  });
});

// Client 3
describe("plan", () => {
  test("known customer", () => {
    const aCustomer = site.customer;
    setPlan(aCustomer, 2);
    expect(aCustomer.billingPlan).toBe(2);
  });

  test("unknown customer", () => {
    const aCustomer = site2.customer;
    setPlan(aCustomer, 2);
    expect(aCustomer.billingPlan).toBe(5);
  });

  function setPlan(customer, plan) {
    customer.billingPlan = plan;
  }
});

// Client 4
describe("weeksDelinquent", () => {
  test("known customer", () => {
    const aCustomer = site.customer;
    expect(getWeeksDelinquent(aCustomer)).toBe(3);
  });

  test("unknown customer", () => {
    const aCustomer = site2.customer;
    expect(getWeeksDelinquent(aCustomer)).toBe(0);
  });

  function getWeeksDelinquent(aCustomer) {
    return aCustomer.paymentHistory.weeksDelinquentInLastYear;
  }
});

function isUnknown(arg) {
  if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  return arg.isUnknown;
}
