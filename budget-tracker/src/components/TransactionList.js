import React from 'react';

const TransactionList = ({ transactions, onDeleteTransaction }) => {
  if (transactions.length === 0) {
    return (
      <div className="no-transactions">
        <p>No transactions yet. Add your first transaction above!</p>
      </div>
    );
  }

  return (
    <div className="transaction-list">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="transaction-item">
          <div className="transaction-info">
            <h4>{transaction.description}</h4>
            <p>{transaction.date}</p>
          </div>
          <div className={`transaction-amount ${transaction.type}`}>
            <span>
              {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
            </span>
            <button
              className="btn btn-danger"
              onClick={() => onDeleteTransaction(transaction.id)}
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;