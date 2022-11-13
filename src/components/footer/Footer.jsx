import React from "react";
import { Link } from 'react-router-dom';
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <p className="footer__container-item">
        <Link to="/friends/enrolled">Friends Who Enrolled</Link>
      </p>
      <p className="footer__container-item">
        <a href="#">Terms & Conditions</a>
      </p>
    </div>
  );
};

export default Footer;
