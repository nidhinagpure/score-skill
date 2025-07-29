import React from 'react'



import profile_icon from "./../assets/profile_icon.png";
import { NavLink, useNavigate} from 'react-router';




const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className=''>
      <div className='flex text-xl text-bold pl-16 p-4 bg-gray-100 w-full font-bold fixed t-0 l-0 b-0 r-0 border-b-2 border-gray-400 shadow-lg  z-10'>
        <p>💻SCORESKILL</p>
        <div>
          <ul className='flex pl-70 cursor-pointer'>

            <NavLink to="/">
              <li className='pl-10  font-bold hover:text-gray-400 hover:underline'>Home</li>
            </NavLink>

            <NavLink to="/courses">
              <li className='pl-10 font-bold hover:text-gray-400 hover:underline'>Courses</li>
            </NavLink>

            <NavLink to="/dashboard">
              <li className='pl-10 font-bold hover:text-gray-400 hover:underline'>Dashboard</li>
            </NavLink>

            <NavLink to="/doudt">
              <li className='pl-10 font-bold hover:text-gray-400 hover:underline'>Doudt</li>
            </NavLink>
            
            <NavLink to="/feedback">
              <li className='pl-10 font-bold hover:text-gray-400 hover:underline'>Feedback</li>
            </NavLink>
          </ul>
        </div>
        <div className='flex direction: rtl ml-56'>
          <img className='w-8  ml-4' src={profile_icon} alt='' />
          <button onClick={()=>navigate('/contact')}  className='bg-blue-100 p-1 rounded text-sm pl-4 pr-4 ml-6 cursor-pointer'>lets connect</button>
        </div>
      </div>
    </div>

  )
}

export default Navbar