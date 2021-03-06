import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "../assets/logo-white.svg";
import facebookLogo from "../assets/icon-facebook.svg";
import youtubeLogo from "../assets/icon-youtube.svg";
import twitterLogo from "../assets/icon-twitter.svg";
import pinterestLogo from "../assets/icon-pinterest.svg";
import instagramLogo from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-veryDarkBlue">
        {/* Flex Container */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* Logo and socials container */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            {/* Logo */}
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            <div>
              <img src={logoWhite} className="h-8" alt="" />
            </div>
            {/* Social Links */}
            <div className="flex justify-center space-x-4">
              <img src={facebookLogo} className="h-8" alt="" />
              <img src={youtubeLogo} className="h-8" alt="" />
              <img src={twitterLogo} className="h-8" alt="" />
              <img src={pinterestLogo} className="h-8" alt="" />
              <img src={instagramLogo} className="h-8" alt="" />
            </div>
          </div>
          {/* List Container */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <Link to="/" className="hover:text-brightRed">
                Home
              </Link>
              <Link to="/" className="hover:text-brightRed">
                Pricing
              </Link>
              <Link to="/" className="hover:text-brightRed">
                Products
              </Link>
              <Link to="/" className="hover:text-brightRed">
                About Us
              </Link>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <Link to="/" className="hover:text-brightRed">
                Careers
              </Link>
              <Link to="/" className="hover:text-brightRed">
                Contact Us
              </Link>
              <Link to="/" className="hover:text-brightRed">
                Privacy Policy
              </Link>
            </div>
          </div>
          {/* Input Container */}
          <div className="flex flex-col justify-between">
            <form action="">
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updates in your inbox"
                />
                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
