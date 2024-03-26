import React from 'react';
import Logo from '../images/logo.PNG';
import GooglePlay from '../images/GooglePlay.PNG';
import AppleStore from '../images/AppStore.PNG';

const Footer = () => {
  return (
    <div className="flex flex-col items-center  p-5 font-semibold md:flex-row">
      <div className="w-1/4 ">
        <div className="p-2">
          <a href="/">How it works</a>
        </div>
        <div className="p-2">
          <a href="/">Available cars</a>
        </div>
        <div className="p-2">
          <a href="/">Plant a tree</a>
        </div>
        <div className="p-2">
          <a href="/">Carasti for Business</a>
        </div>
        <div className="p-2">
          <a href="/">EVs</a>
        </div>
      </div>

      <div className="w-1/4 ">
        <div className="p-2">
          <a href="/">About Us</a>
        </div>
        <div className="p-2">
          <a href="/">News</a>
        </div>
        <div className="p-2">
          <a href="/">FAQs</a>
        </div>
        <div className="p-2">
          <a href="/">Contact Us</a>
        </div>
      </div>

      <div className="w-1/4 ">
        <div className="p-2">
          <a href="/">Terms & Conditions</a>
        </div>
        <div className="p-2">
          <a href="/">Privacy Policy</a>
        </div>
      </div>

      <div className="p-2">
        <img className="w-46 h-16" src={Logo} alt="" />
      </div>

      <div className="p-2">
        <img className="w-46 h-16" src={GooglePlay} alt="" />
      </div>

      <div className="p-2">
        <img className="w-46 h-16" src={AppleStore} alt="" />
      </div>
    </div>
  );
};

export default Footer;
