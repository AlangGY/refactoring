const getBill = require("./getBill.js").default;
const invoices = require("./invoices.json");
const plays = require("./plays.json");

const properBill = `청구 내역 (고객명: BigCo)
  Hamlet: $650.00 (55석)
  As You Like It: $580.00 (35석)
  Othello: $500.00 (40석)
총액: $1,730.00
적립 포인트: 47점

청구 내역 (고객명: Alang)
  Hamlet: $400.00 (20석)
  As You Like It: $860.00 (70석)
  Othello: $500.00 (40석)
총액: $1,760.00
적립 포인트: 64점

청구 내역 (고객명: jeong woon)
  Hamlet: $1,000.00 (90석)
  As You Like It: $315.00 (5석)
  Othello: $400.00 (10석)
총액: $1,715.00
적립 포인트: 61점`;

describe("getBill", () => {
  test("invoices.json and plays.json will return bill properly", () => {
    let result = "";
    for (const invoice of invoices) {
      result += getBill(invoice, plays) + "\n";
    }

    result = result.trimEnd();
    expect(result).toBe(properBill);
  });
});
