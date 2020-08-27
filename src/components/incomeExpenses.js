import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>収入</h4>
        <p className="money plus">{income}円</p>
      </div>
      <div>
        <h4>支出</h4>
        <p className="money minus">{expense}円</p>
      </div>
    </div>
  )
}