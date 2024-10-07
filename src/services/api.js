import axios from 'axios';

const API_URL = 'http://localhost:5000/v1'; 

export const saveTransaction = async (transactionData) => {
  const response = await axios.post(`${API_URL}/transaction`, transactionData);
  return response.data;
};

export const getAllTransactions = async () => {
  const response = await axios.get(`${API_URL}/transactions`);
  return response.data;
};
 