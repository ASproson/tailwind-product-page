import React from 'react';
import { Link } from 'react-router-dom';
import illustrationIntro from '../assets/illustration-intro.svg'
import Features from './Features';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import Footer from './Footer';

const HomePage = () => {
    return (
        <div>
            <section className="hero">
                <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
                    {/* Left item */}
                    <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
                        <h1 className="max-w-mid text-4xl font-bold text-center md:text-5xl md:text-left">
                            Bring everyone together to build better products
                        </h1>
                        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                            Manage makes it simple for software teams to plan day-to-day tasks whilst keeping the larger team goals in view
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <Link to='/' className=' p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight'>
                                Get Started
                            </Link>
                        </div>
                    </div>
                    {/* Right item [image] */}
                    <div className='md:w-1/2'>
                        <img src={illustrationIntro} alt="" />
                    </div>
                </div>
            </section>
            <Features />
            <Testimonials />
            <CallToAction />
            <Footer />
        </div>
    );
};

export default HomePage;

// Flex row on larger screens, but stacks when the screen is small; reverse allows us to put the image on top