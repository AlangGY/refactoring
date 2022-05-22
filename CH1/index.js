const invoices = require("./invoices.json");
const plays = require("./plays.json");
const getBill = require("./getBill.js").default;

for (const invoice of invoices) {
  console.log(getBill(invoice, plays));
}
