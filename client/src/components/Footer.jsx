import React from 'react'

import main_img from "./../assets/main_img.png";
import github from "./../assets/github.png";
import linkedin from "./../assets/linkedin.png";
import email from "./../assets/email.png";
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-gray-200 py-4 mt-10'>
            <div className='flex justify-around mt-2 pb-10'>

                <div className='flex flex-col'>
                    <p className='font-bold text-lg hover:text-gray-500'>SCRORESKILL</p>
                    <img className='w-30 pt-4' src={main_img} alt='' />
                </div>
                <div className='flex flex-col'>
                    <h2 className="font-bold mb-2 text-lg">Quick Links</h2>
                    <ul>
                        <NavLink to="/">
                            <li className='text-lg hover:text-gray-500 '>Home</li>
                        </NavLink>
                        <NavLink to="/courses">
                            <li className='text-lg hover:text-gray-500 '>Courses</li>
                        </NavLink>
                        <NavLink to="/about">
                            <li className='text-lg hover:text-gray-500 '>About</li>
                        </NavLink>
                        <NavLink to="/contact">
                            <li className='text-lg hover:text-gray-500 '>Contact</li>
                        </NavLink>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h2 className="font-bold mb-2 text-lg">Support</h2>
                    <ul>
                        <li className='text-lg hover:text-gray-500 '>FAQ</li>
                        <li className='text-lg hover:text-gray-500 '>Privacy</li>
                        <li className='text-lg hover:text-gray-500 '>Terms</li>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h2 className="font-bold mb-2 text-lg">Connect</h2>
                    <p className='text-lg'>Email:<span className='text-lg hover:text-gray-500'> info@scoreskill.com</span> </p>
                    <div className="flex space-x-2 mt-4">
                        <NavLink to="https://github.com/nidhinagpure">
                            <img className='w-8 h-8' src={github} alt='' />

                        </NavLink>
                        <NavLink to="">
                            <img className='w-8 h-8' src={email} alt='' />

                        </NavLink>
                        <NavLink to="https://www.linkedin.com/in/nidhi-nagpure-160110283/">
                            <img className='w-8 h-8' src={linkedin} alt='' />
                        </NavLink>
                    </div>
                </div>
            </div>
            <p className='text-center'>© 2025 ScoreSkill. All rights reserved.</p>


        </div>
    )
}

export default Footer;
