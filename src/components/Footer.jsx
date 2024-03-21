import React from 'react';
import Logo from '../images/logo.PNG';
import GooglePlay from '../images/GooglePlay.PNG';
import AppleStore from '../images/AppStore.PNG';

const Footer = () => {
  return (
    <div className="flex h-64 px-16 font-semibold">
      <div className="flex w-3/4">
        <div className="w-1/4 pt-16">
          <div className="">
            <a href="/">How it works</a>
          </div>
          <div className="">
            <a href="/">Available cars</a>
          </div>
          <div className="">
            <a href="/">Plant a tree</a>
          </div>
          <div className="">
            <a href="/">Carasti for Business</a>
          </div>
          <div className="">
            <a href="/">EVs</a>
          </div>
        </div>

        <div className="w-1/4 pt-16">
          <div className="">
            <a href="/">About Us</a>
          </div>
          <div className="">
            <a href="/">News</a>
          </div>
          <div className="">
            <a href="/">FAQs</a>
          </div>
          <div className="">
            <a href="/">Contact Us</a>
          </div>
        </div>
        <div className="w-1/4 pt-16">
          <div className="">
            <a href="/">Terms & Conditions</a>
          </div>
          <div className="">
            <a href="/">Privacy Policy</a>
          </div>
        </div>
      </div>
      <div className="w-1/4 pb-12">
        <div className="p-2">
          <img className="w-46 h-16" src={Logo} alt="" />
        </div>
        <div className="p-2">
          <img className="w-46 h-16" src={GooglePlay} alt="" />
        </div>
        <div className="p-2">
          <img className="w-46 h-16" src={AppleStore} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
