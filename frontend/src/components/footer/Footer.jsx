import React from "react";
import "./footer.css";
import {  AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          © 2024 EduNest. Learning made fun. <br />
            Developed with ❤️ by <a href="">Harsh Doliya</a>
        </p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/harsh-doliya-79656137a">
            <FaLinkedin />
          </a>
          <a href="https://github.com/CodeJoc/EduNest">
            <FaGithubSquare />
          </a>
          <a href="https://www.instagram.com/harsh_doliya_/">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
