import React from 'react';
import './Payment.css';

const Payment = () => {
  return (
    <div className="payment">
      <h2>Payment</h2>
      <div className="payment-methods">
        <label className="payment-option">
          <span className="payment-text1">Credit Card</span>
        </label>
        <label className="payment-option">
          
          <span className="payment-text">PayPal</span>
        </label>
        <label className="payment-option">
          
          <span className="payment-text">PayPal Credit</span>
        </label>
      </div>
      <hr className="divider" />
      <div className="credit-card">
        <img src="./card.png" alt="Credit Card" className="card-image" />
        <div className="card-details">
          <input type="text" placeholder="Cardholder Name" />
          <input type="text" placeholder="Card Number" />
        </div>
        <div className="card-expiry-cvv">
          <input type="text" placeholder="Exp. Date" />
          <input type="text" placeholder="CVV" />
        </div>
      </div>
      <div className="checkbox-container">
        <input type="checkbox" id="billing" />
        <label htmlFor="billing">Same as billing address</label>
      </div>
      <div className="buttons">
        <button type="button" className="back-button">Back</button>
        <button type="submit" className="pay-button">Pay</button>
      </div>
    </div>
  );
};

export default Payment;
