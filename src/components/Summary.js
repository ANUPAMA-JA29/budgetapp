import React from 'react';

const Summary = ({ transactions }) => {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);

  const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);

  const balance = income - expense;

  return (
    <div className="summary">
      <div className="summary-item income">
        <h3>Income</h3>
        <p>${income.toFixed(2)}</p>
      </div>
      <div className="summary-item expense">
        <h3>Expenses</h3>
        <p>${expense.toFixed(2)}</p>
      </div>
      <div className="summary-item balance">
        <h3>Balance</h3>
        <p>${balance.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Summary;