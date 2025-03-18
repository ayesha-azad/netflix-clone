import React from 'react';
import './Footer.css';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLanguageSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <p>Questions? <a href="#">Contact us.</a></p>
      </div>
      <div className="footer-links">
        <ul className='footer-links-list'>
          <li className='footer-link'><a href="#">FAQ</a></li>
          <li className='footer-link'><a href="#">Investor Relations</a></li>
          <li className='footer-link'><a href="#">Privacy</a></li>
          <li className='footer-link'><a href="#">Speed Test</a></li>
        </ul>
        <ul className='footer-links-list'>
          <li className='footer-link'><a href="#">Help Center</a></li>
          <li className='footer-link'><a href="#">Jobs</a></li>
          <li className='footer-link'><a href="#">Cookie Preferences</a></li>
          <li className='footer-link'><a href="#">Legal Notices</a></li>
        </ul>
        <ul className='footer-links-list'>
          <li className='footer-link'><a href="#">Account</a></li>
          <li className='footer-link'><a href="#">Ways to Watch</a></li>
          <li className='footer-link'><a href="#">Corporate Information</a></li>
          <li className='footer-link'><a href="#">Only on Netflix</a></li>
        </ul>
        <ul className='footer-links-list'>
          <li className='footer-link'><a href="#">Media Center</a></li>
          <li className='footer-link'><a href="#">Terms of Use</a></li>
          <li className='footer-link'><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-language">
        <div className="custom-select-container">
            <IoLanguageSharp className='language-icon' />
            <select className="language-btn">
                <option className='language-name' defaultValue="English">English</option>
            </select>
            <IoMdArrowDropdown className="custom-arrow" />
        </div>
      </div>


      <div className="footer-country">
        <p>Netflix Pakistan Clone by AA</p>
      </div>
    </footer>
  );
};

export default Footer;
