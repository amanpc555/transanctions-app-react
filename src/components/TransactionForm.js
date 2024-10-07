import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveTransaction } from "../services/api.js";

const TransactionForm = () => {
  const [transactionType, setTransactionType] = useState("credit");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!amount || !description) {
      setError("Please fill in all fields.");
      return;
    }

    const transactionData = {
      type: transactionType,
      amount: parseFloat(amount),
      description,
    };

    try {
      await saveTransaction(transactionData);
      navigate("/");
    } catch (error) {
      setError("Error saving transaction: " + error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Transaction Type:</label>
        <select
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value)}
        >
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Save Transaction</button>
    </form>
  );
};

export default TransactionForm;
