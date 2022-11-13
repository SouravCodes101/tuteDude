import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <p className="footer__container-item">
        <a href="/friends/enrolled">Friends Who Enrolled</a>
      </p>
      <p className="footer__container-item">
        <a href="#">Terms & Conditions</a>
      </p>
    </div>
  );
};

export default Footer;
