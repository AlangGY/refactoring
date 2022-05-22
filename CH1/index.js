import { statement } from "./getBill.js";
import invoices from "./invoices.json";
import plays from "./plays.json";

for (const invoice of invoices) {
  console.log(statement(invoice, plays));
}
