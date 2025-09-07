import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!description || !amount) {
      alert('Please fill in all fields');
      return;
    }

    onAddTransaction({
      description: description.trim(),
      amount: parseFloat(amount),
      type
    });

    // Reset form
    setDescription('');
    setAmount('');
    setType('expense');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description..."
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            required
          />
        </div>

        <div className="form-group">
          <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;