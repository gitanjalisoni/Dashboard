import React from 'react';
import './Summary.css';

const Summary = () => {
  return (
    <div className="summary">
      <h2>Summary</h2>
      <div className="summary-items">
        <div className="summary-item">
          <img src="./iphone.webp" alt="iPhone" />
          <span>Apple iPhone 14 Pro Max 128Gb</span>
          <span className="item-price">$1399</span>
        </div>
        <div className="summary-item">
          <img src="./airpod.png" alt="AirPods" />
          <span>AirPods Max Silver</span>
          <span className="item-price">$549</span>
        </div>
        <div className="summary-item">
          <img src="./watch.png" alt="Watch" />
          <span>Apple Watch Series 5 GPS 41mm</span>
          <span className="item-price">$399</span>
        </div>
      </div>
      <div className="summary-details">
      <div className="summary-detail">
          <span>Address</span>
        </div>
        <div className="summary-detail">
          <span>1131 Dusty Townline, Jacksonville, TX 40322</span>
        </div>
        <div className="summary-detail">
          <span>Shipment method</span>
        </div>
        <div className="summary-detail">
          <span>Free</span>
        </div>
        <div className="summary-detail">
          <span>Subtotal</span>
          <span>$2347</span>
        </div>
        <div className="summary-detail">
          <span>Estimated Tax</span>
          <span>$50</span>
        </div>
        <div className="summary-detail">
          <span>Estimated shipping & Handling</span>
          <span>$29</span>
        </div>
        <div className="summary-detail total">
          <span>Total</span>
          <span>$2426</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
