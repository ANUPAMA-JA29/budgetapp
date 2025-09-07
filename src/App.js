import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm.js';
import TransactionList from './components/TransactionList.js';
import Summary from './components/Summary.js';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const savedTransactions = localStorage.getItem('budget-transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('budget-transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0]
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>💰 Budget Tracker</h1>
        <p>Track your income and expenses</p>
      </div>

      <Summary transactions={transactions} />

      <div className="card">
        <h2>Add Transaction</h2>
        <TransactionForm onAddTransaction={addTransaction} />
      </div>

      <div className="card">
        <h2>Recent Transactions</h2>
        <TransactionList
          transactions={transactions}
          onDeleteTransaction={deleteTransaction}
        />
      </div>
    </div>
  );
}

export default App;
