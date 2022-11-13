import React from 'react';
import './work.css';
import component1 from '../../assets/component1.png';
import component2 from '../../assets/component2.png';
import component3 from '../../assets/component3.png';
import component4 from '../../assets/component4.png';
import component5 from '../../assets/component5.png';

const Work = () => {
  return (
    <div className="tuteDude__container">
      <div className='tuteDude__container-hdw'>
        <h2>How does it work?</h2>
      </div>
      <div class="hero">
      <div className="tuteDude__work1">
        <div className="tuteDude__work-item">
          <div className="tuteDude__work-item_logo">
            <img src={component1} alt="component1" />
          </div>
          <div className="tuteDude__work-item_text">
            <h3>Invite your Friends</h3>
            <p>Share the link tutedude.com with
                your friends</p>
          </div>
        </div>
        <div className="tuteDude__work-item">
          <div className="tuteDude__work-item_logo">
            <img src={component5} alt="component1" />
          </div>
          <div className="tuteDude__work-item_text">
            <h3>You get ₹ 200 as referral money</h3>
            <p>On total purchase the friend makes, into your wallet</p>
          </div>
        </div>
        <div className="tuteDude__work-item">
          <div className="tuteDude__work-item_logo">
            <img src={component3} alt="component1" />
          </div>
          <div className="tuteDude__work-item_text">
            <h3>Transfer money from wallet</h3>
            <p>When the wallet balance reaches
              ₹200 or more, you can withdraw it</p>
          </div>
        </div>
      </div>
      <div className="tuteDude__work2">
      <div className="tuteDude__work-item">
          <div className="tuteDude__work-item_logo">
            <img src={component4} alt="component1" />
          </div>
          <div className="tuteDude__work-item_text">
            <h3>Friend purchases any course</h3>
            <p>Using your REFERRAL CODE in the payments page</p>
          </div>
        </div> <div className="tuteDude__work-item">
          <div className="tuteDude__work-item_logo">
            <img src={component2} alt="component1" />
          </div>
          <div className="tuteDude__work-item_text">
            <h3>Your Friend gets ₹ 200 Off </h3>
            <p>On his overall fee on successful purchase using your referral code </p>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Work