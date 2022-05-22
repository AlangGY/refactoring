import { createRequire } from "module";
import { statement } from "./getBill.js";
const require = createRequire(import.meta.url);

const invoices = require("./invoices.json");
const plays = require("./plays.json");

for (const invoice of invoices) {
  console.log(statement(invoice, plays));
}
