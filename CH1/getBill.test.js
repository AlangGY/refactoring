import { htmlStatement, statement } from "./getBill.js";
import invoices from "./invoices.json";
import plays from "./plays.json";

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

const properBillHTML = `<h1>청구 내역 (고객명: BigCo)</h1>

    <table>
        <tr>
            <th>연극</th>
            <th>좌석 수</th>
            <th>금액</th>
        </tr>
        <tr>
                <td>Hamlet</td>
                <td>(55석)</td>
                <td>$650.00</td>
            </tr>
            <tr>
                <td>As You Like It</td>
                <td>(35석)</td>
                <td>$580.00</td>
            </tr>
            <tr>
                <td>Othello</td>
                <td>(40석)</td>
                <td>$500.00</td>
            </tr>
            
    </table>
    <p>총액: <em>$1,730.00</em></p>
<p>적립 포인트: <em>47</em>점</p><h1>청구 내역 (고객명: Alang)</h1>

    <table>
        <tr>
            <th>연극</th>
            <th>좌석 수</th>
            <th>금액</th>
        </tr>
        <tr>
                <td>Hamlet</td>
                <td>(20석)</td>
                <td>$400.00</td>
            </tr>
            <tr>
                <td>As You Like It</td>
                <td>(70석)</td>
                <td>$860.00</td>
            </tr>
            <tr>
                <td>Othello</td>
                <td>(40석)</td>
                <td>$500.00</td>
            </tr>
            
    </table>
    <p>총액: <em>$1,760.00</em></p>
<p>적립 포인트: <em>64</em>점</p><h1>청구 내역 (고객명: jeong woon)</h1>

    <table>
        <tr>
            <th>연극</th>
            <th>좌석 수</th>
            <th>금액</th>
        </tr>
        <tr>
                <td>Hamlet</td>
                <td>(90석)</td>
                <td>$1,000.00</td>
            </tr>
            <tr>
                <td>As You Like It</td>
                <td>(5석)</td>
                <td>$315.00</td>
            </tr>
            <tr>
                <td>Othello</td>
                <td>(10석)</td>
                <td>$400.00</td>
            </tr>
            
    </table>
    <p>총액: <em>$1,715.00</em></p>
<p>적립 포인트: <em>61</em>점</p>`;

describe("getBill", () => {
  test("invoices.json and plays.json will return bill properly", () => {
    let result = "";
    for (const invoice of invoices) {
      result += statement(invoice, plays) + "\n";
    }

    result = result.trimEnd();
    expect(result).toBe(properBill);
  });

  test("rendering HTML", () => {
    let result = "";
    for (const invoice of invoices) {
      result += htmlStatement(invoice, plays);
    }
    expect(result).toBe(properBillHTML);
  });
});
