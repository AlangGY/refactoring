import { Customer, Site } from "../10-5";

let site = new Site(new Customer({ name: "Alang", billingPlan: 4 }));

const registry = {
  billingPlans: {
    basic: 5,
  },
};

beforeEach(() => {
  site = new Site(new Customer({ name: "Alang", billingPlan: 4 }));
});

// Client 1

// .. codes..
describe("customer name", () => {
  test("known customer", () => {
    const aCustomer = site.customer;
    expect(getCustomerName(aCustomer)).toBe("Alang");
  });
  test("unknown customer", () => {
    const aCustomer = "미확인 고객";
    expect(getCustomerName(aCustomer)).toBe("거주자");
  });

  function getCustomerName(customer) {
    let customerName;
    if (isUnknown(customer)) customerName = "거주자";
    else customerName = customer.name;
    return customerName;
  }
});
// Client 2
describe("billing plan", () => {
  test("known customer", () => {
    const aCustomer = site.customer;
    expect(getPlan(aCustomer)).toBe(4);
  });

  test("unkown customer", () => {
    const aCustomer = "미확인 고객";
    expect(getPlan(aCustomer)).toBe(5);
  });

  function getPlan(customer) {
    return isUnknown(customer)
      ? registry.billingPlans.basic
      : customer.billingPlan;
  }
});

// Client 3
describe("plan", () => {
  test("known customer", () => {
    const aCustomer = site.customer;
    setPlan(aCustomer, 2);
    expect(aCustomer.billingPlan).toBe(2);
  });

  test("unknown customer", () => {
    const aCustomer = "미확인 고객";
    setPlan(aCustomer, 2);
    expect(aCustomer?.billingPlan).toBeUndefined();
  });

  function setPlan(customer, plan) {
    if (!isUnknown(customer)) customer.billingPlan = plan;
  }
});

// Client 4
describe("weeksDelinquent", () => {
  test("known customer", () => {
    const aCustomer = site.customer;
    expect(getWeeksDelinquent(aCustomer)).toBe(3);
  });

  test("unknown customer", () => {
    const aCustomer = "미확인 고객";
    expect(getWeeksDelinquent(aCustomer)).toBe(0);
  });

  function getWeeksDelinquent(aCustomer) {
    return isUnknown(aCustomer)
      ? 0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
  }
});

function isUnknown(arg) {
  if (!(arg instanceof Customer || arg === "미확인 고객"))
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  return arg === "미확인 고객";
}
