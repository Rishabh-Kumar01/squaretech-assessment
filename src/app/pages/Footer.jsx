import React from "react";
import "../styles/footer.css";
import img22 from "../../Assets/images/22.png";
import img23 from "../../Assets/images/23.png";
import img24 from "../../Assets/images/24.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="content">
        <div className="Branding">
          <h1>SquareTech</h1>
          <h6>Lorem ipsum dolor sit amet. Quo itaque.</h6>
          <div className="inputField">
            <input type="text" />
            <span className="btn">Sign Up!</span>
          </div>
          <p>
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company
          </p>
        </div>
        <div className="Links">
          <div className="siteMap">
            <h5>SITEMAP</h5>
            <ul>
              <li>HOME</li>
              <li>SERVICES</li>
              <li>CAREERS</li>
              <li>ABOUT</li>
              <li>INDUSTRIES</li>
            </ul>
          </div>
          <div className="resources">
            <h5>RESOURCES</h5>
            <ul>
              <li>HELP</li>
              <li>BLOG</li>
              <li>RPIVACY</li>
            </ul>
          </div>
          <span className="followUs">
            <h5>FOLLOW US</h5>
            <Image src={img22} width="100%" height="100%" alt="insta" />
            <Image src={img23} width="100%" height="100%" alt="facebook" />
            <Image src={img24} width="100%" height="100%" alt="linkedin" />
          </span>
        </div>
      </div>
      <div className="privacy">
        <span>©2022 SquareTech. All rights reserved.</span>
        <span className="Links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of service</a>
          <a href="#">Cookies Settings</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
