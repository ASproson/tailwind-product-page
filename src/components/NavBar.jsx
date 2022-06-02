import React, { useState } from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {

    let style = {divClass: 'block hamburger md:hidden focus:outline-none'}

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            {/* Navbar */}
            <nav className="relative container mx-auto p-6">
                {/* Flex container */}
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="pt-2">
                        <img src={logo} alt="" />
                    </div>
                    {/* Menu items */}
                    <div className="hidden md:flex space-x-6">
                        <Link to='/' className='hover:text-darkGrayishBlue'>Pricing</Link>
                        <Link to='/' className='hover:text-darkGrayishBlue'>Product</Link>
                        <Link to='/' className='hover:text-darkGrayishBlue'>About Us</Link>
                        <Link to='/' className='hover:text-darkGrayishBlue'>Careers</Link>
                        <Link to='/' className='hover:text-darkGrayishBlue'>Contact</Link>
                        <Link to='/' className='hover:text-darkGrayishBlue'>Pricing</Link>
                    </div>
                    {/* Button */}
                    <Link to='/' className='hidden lg:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>Get Started</Link>

                    {/* Hamburger Icon */}
                    <button id="menu-btn" className={`${style.divClass}}`} onClick={() => setIsMenuOpen((prev) => !prev)}>
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>
                {/* Mobile Menu */}
                <div className="md:hidden">
                    <div id="menu" className="absolute flex hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                        <Link to='/' className='hover:text-darkGrayishBlue'>Pricing</Link>
                        <Link to='/' className='hover:text-darkGrayishBlue'>Product</Link>
                        <Link to='/' className='hover:text-darkGrayishBlue'>About Us</Link>
                        <Link to='/' className='hover:text-darkGrayishBlue'>Careers</Link>
                        <Link to='/' className='hover:text-darkGrayishBlue'>Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;

// mx-auto, margin auto on x axis
// space-x-6 generates responsive spacing between nav items
// hidden md:flex space x-6 shows navbar items when above size specificed in themes.screens