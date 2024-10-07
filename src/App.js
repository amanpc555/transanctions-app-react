import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransactionForm from './components/TransactionForm.js';
import TransactionList from './components/TransactionList.js';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TransactionList />} />
          <Route path="/add-transaction" element={<TransactionForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
