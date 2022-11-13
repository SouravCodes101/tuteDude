import React from 'react';
import './referral.css';

const Referral = () => {
  return (
    <div className="tuteDude__referral ">
      <div className="tuteDude__referral-earnings">
        <div className="tuteDude__referral-earnings-items">
          <div className="tuteDude__referral-earnings-item">
            <p className="tuteDude__referral-earnings-item-heading">Referral Earning</p>
            <p className="tuteDude__referral-earnings-item-value">₹ 2,500</p>
          </div>
          <div className="tuteDude__referral-earnings-item">
            <p className="tuteDude__referral-earnings-item-heading">Total Referrals</p>
            <p className="tuteDude__referral-earnings-item-value">7</p>
          </div>
          <div className="tuteDude__referral-earnings-item">
            <p className="tuteDude__referral-earnings-item-heading">Wallet Balance</p>
            <p className="tuteDude__referral-earnings-item-value">₹ 500</p>
          </div>
          <div className="tuteDude__referral-button">
            <button type="button">Withdraw Balance</button>
          </div>
        </div>
        
      </div>
      <div className="tuteDude__referral-code">
        <div className='tuteDude__referral-code-1'>
        <p>Your Referral Code</p>
        </div>
        <div className='tuteDude__referral-code-2'>
        <p>EDCH54</p>
        </div>
        
      </div>
    </div>
  )
}

export default Referral