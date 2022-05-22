import invoices from "./invoices.json";
import plays from "./plays.json";
import createStatementData from "./createStatementData";

const STATEMENT_DATAS = [
  {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 55,
        play: { name: "Hamlet", type: "tragedy" },
        amount: 65000,
        volumeCredits: 25,
      },
      {
        playID: "as-like",
        audience: 35,
        play: { name: "As You Like It", type: "comedy" },
        amount: 58000,
        volumeCredits: 12,
      },
      {
        playID: "othello",
        audience: 40,
        play: { name: "Othello", type: "tragedy" },
        amount: 50000,
        volumeCredits: 10,
      },
    ],
    totalAmount: 173000,
    totalVolumeCredits: 47,
  },
  {
    customer: "Alang",
    performances: [
      {
        playID: "hamlet",
        audience: 20,
        play: { name: "Hamlet", type: "tragedy" },
        amount: 40000,
        volumeCredits: 0,
      },
      {
        playID: "as-like",
        audience: 70,
        play: { name: "As You Like It", type: "comedy" },
        amount: 86000,
        volumeCredits: 54,
      },
      {
        playID: "othello",
        audience: 40,
        play: { name: "Othello", type: "tragedy" },
        amount: 50000,
        volumeCredits: 10,
      },
    ],
    totalAmount: 176000,
    totalVolumeCredits: 64,
  },
  {
    customer: "jeong woon",
    performances: [
      {
        playID: "hamlet",
        audience: 90,
        play: { name: "Hamlet", type: "tragedy" },
        amount: 100000,
        volumeCredits: 60,
      },
      {
        playID: "as-like",
        audience: 5,
        play: { name: "As You Like It", type: "comedy" },
        amount: 31500,
        volumeCredits: 1,
      },
      {
        playID: "othello",
        audience: 10,
        play: { name: "Othello", type: "tragedy" },
        amount: 40000,
        volumeCredits: 0,
      },
    ],
    totalAmount: 171500,
    totalVolumeCredits: 61,
  },
];

describe("create Statement Data", () => {
  test("creating statement data", () => {
    const result = [];
    for (const invoice of invoices) {
      result.push(createStatementData(invoice, plays));
    }
    expect(result).toEqual(STATEMENT_DATAS);
  });
});
