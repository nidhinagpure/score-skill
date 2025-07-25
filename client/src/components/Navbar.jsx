import React from 'react'
import profile_icon from "./../assets/profile_icon.png";
import { NavLink } from 'react-router';


const Navbar = () => {
  return (
    <div className=''>
      <div className='flex text-xl text-bold pl-16 p-4 bg-gray-100 w-full font-bold'>
        <p>💻SCORESKILL</p>
        <div>
          <ul className='flex pl-70 cursor-pointer'>

            <NavLink to="/">
              <li className='pl-10 font-bold hover:text-gray-400 hover:underline'>Home</li>
            </NavLink>

            <Navbar to="/courses">
              <li className='pl-10 font-bold hover:text-gray-400 hover:underline'>Courses</li>
            </Navbar>

            <NavLink to="/dashboard">
              <li className='pl-10 font-bold hover:text-gray-400 hover:underline'>Dashboard</li>
            </NavLink>

            <NavLink to="/about">
              <li className='pl-10 font-bold hover:text-gray-400 hover:underline '>About</li>
            </NavLink>
            
            <NavLink to="/doudt">
              <li className='pl-10 font-bold hover:text-gray-400 hover:underline'>Doudt</li>
            </NavLink>
          </ul>
        </div>
        <div className='flex direction: rtl ml-56'>
          <img className='w-8  ml-4' src={profile_icon} alt='' />
          <button className='bg-blue-100 p-1 rounded text-sm pl-4 pr-4 ml-6 cursor-pointer'>lets connect</button>
        </div>
      </div>
      <hr className=' w-full text-gray-400 pl-8 pr-8 shadow' />

    </div>

  )
}

export default Navbar