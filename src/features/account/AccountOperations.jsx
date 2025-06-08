import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { deposit, withdraw, requestLoan, payLoan } from "./accountSlice";

const currencies = [
  { id: "INR", name: "Indian Rupees" },
  { id: "USD", name: "US Dollar" },
  { id: "EUR", name: "Euro" },
  { id: "GBP", name: "British Pound" },
];

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("INR");

  const disptch = useDispatch();
  const { loan: currentLoan, loanPurpose: currentLoanPurpose, balance, isLoading } = useSelector(state => state.account);

  function handleDeposit() {
    if (!depositAmount)
      return;

    disptch(deposit(depositAmount));
    // disptch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("INR");
  }

  function handleWithdrawal() {
    if (!withdrawalAmount)
      return;

    disptch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose)
      return;

    disptch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    disptch(payLoan());
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {currencies.map(currency => <option key={currency.id} value={currency.id}>{currency.name}</option>)}
          </select>

          <button onClick={handleDeposit} disabled={isLoading}>{isLoading ? "Converting..." : "Deposit"} {depositAmount}</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        {currentLoan === 0 && <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>}

        {currentLoan !== 0 && <div>
          <span>Pay back {currentLoan} </span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>}
      </div>
    </div>
  );
}

export default AccountOperations;
