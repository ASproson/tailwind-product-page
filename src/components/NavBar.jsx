import React from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
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
                </div>
            </nav>
        </div>
    );
};

export default NavBar;

// mx-auto, margin auto on x axis
// space-x-6 generates responsive spacing between nav items
// hidden md:flex space x-6 shows navbar items when above size specificed in themes.screens