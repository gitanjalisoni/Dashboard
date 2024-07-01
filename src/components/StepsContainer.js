import React from 'react';
import './StepsContainer.css';
import { CiLocationOn } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";

const StepsContainer = () => {
  return (
    <div className="steps-container">
      <div className="step step1">
        <span className="step-number"><CiLocationOn /> Step 1</span>
        <span className="step-label">Address</span>
      </div>
      <div className="step step2">
        <span className="step-number"><IoCartOutline />Step 2</span>
        <span className="step-label">Shipping</span>
      </div>
      <div className="step step3">
        <span className="step-number"><IoIosPhonePortrait />Step 3</span>
        <span className="step-label">Payment</span>
      </div>
    </div>
  );
}

export default StepsContainer;
