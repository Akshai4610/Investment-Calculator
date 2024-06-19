import {
  calculateInvestmentResults as result,
  formatter,
} from "../util/investment";
export default function Result({ userInput }) {
  const resultLog = result(userInput);
  const initialInvestment =
    resultLog[0].valueEndOfYear -
    resultLog[0].interest -
    resultLog[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultLog.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const investedCapital = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{investedCapital}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
