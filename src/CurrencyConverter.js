import React, { useState } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');

  const convert = (event) => {
    event.preventDefault();
    if (amount === '') {
      alert('Enter amount');
      setResult('');
      return;
    }

const url = 'https://api.exchangerate-api.com/v4/latest/USD';
axios.get(url)
  .then((response) => {
    const inrRate = response.data.rates.INR; // Get the INR rate
    const a = parseFloat(amount);
    const r = a * inrRate; // Convert USD to INR
    const ans = 'INR ' + r.toFixed(2);
    setResult(ans);
  })
  .catch((err) => alert('Issue: ' + err));

  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="currency-converter">
      <center>
        <h1>Currency Converter</h1>
        <form onSubmit={convert}>
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount in $"
          />
          <br />
          <br />
          <input type="submit" value="Convert" />
        </form>
        <h2 id="msg">{result}</h2>
      </center>
      <footer className="footer">
        <p>Created by @Suraj Godse</p>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/suraj-godse" target="_blank" rel="noopener noreferrer">
            <img src="images/linkedin-logo.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/surajgodse" target="_blank" rel="noopener noreferrer">
            <img src="images/github-logo.png" alt="GitHub" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CurrencyConverter;
