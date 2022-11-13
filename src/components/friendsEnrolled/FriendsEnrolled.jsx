import React from 'react';
import './friendsEnrolled.css';
import {Navbar, CourseInfo } from '../'; 
import {useNavigate} from 'react-router-dom' ; 
import Arrow17 from '../../assets/Arrow17.png';

export default function FriendsEnrolled() { 
  const navigate = useNavigate() ;
  const ReuseCards = ({date, name , enrolled , amount}) => {
    return (
      <div className="card">
        <div className="card-head">
          <p>{name}</p>
          <p className="date">{date}</p>
        </div> 
        <div className="course-enrolled">
          <p>Courses Enrolled({enrolled.length})</p> 
          
          <div className="badge-wrap">
            {enrolled.map(data => (
              <div className="badge">
                 {data}
              </div>
            ))}
          </div> 
          <div className="amount">
            <p>Referral Amount</p> 
            <p className="price">₹ {amount}</p>
          </div>
        </div>
      </div>
    )
  } 
  const handleBack = () => {
    navigate(-1) ;  
  }
  return (
    <>
    <Navbar />
    <div className="course">
        <CourseInfo info ={"UI/UX > Refer & Earn > Friends Referred "}/>
    </div>
      <div className="container"> 
        <div className="go-back" onClick={handleBack}>
           <p><img src={Arrow17} alt="Arrow17"/>go back</p>
        </div>
        <div className="sub-head">
          <div className="referral-code">
            <p>Your Referral Code</p>
            <button>E D C H 5 4</button>
          </div>

          <div className="wbalance">
            <p>Wallet Balance</p>
            <p>₹ 500</p>
          </div>
        </div> 
        <div className="hero">
        <p className="head">Friends who enrolled<span>(3)</span></p>  
        <div className="hero-main">
        <ReuseCards name={"Dhiraj Saxsena"} 
           enrolled={['UI/UX','Photoshop','Illustrator','Python','MERN','Java']} 
           date={'14 sep,2022'} 
           amount = {'185'}
          />
            <ReuseCards name={"Subash Mishra"} 
           enrolled={['UI/UX','Photoshop','Illustrator','Python','MERN','Java','C++']} 
           date={'14 sep,2022'} 
           amount = {'485'}
          />
           <ReuseCards name={"Prafull Kumar"} 
           enrolled={['UI/UX','Photoshop','Illustrator','Python','MERN','Java','C++']} 
           date={'14 sep,2022'} 
           amount = {'485'}
          />
        </div>
        </div>
        <p className="tc">Terms & Conditions</p>
      </div>
    </>
  );
}
