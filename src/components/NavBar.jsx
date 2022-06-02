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
                    <div className="flex space-x-6">
                        <Link to='/'>Pricing</Link>
                        <Link to='/'>Product</Link>
                        <Link to='/'>About Us</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Pricing</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;

// mx-auto, margin auto on x axis
// space-x-6 generates responsive spacing between nav items