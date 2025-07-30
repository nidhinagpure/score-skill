import React from 'react'
import feedback from "./../assets/feedback.png";

const Feedback = () => {
  return (
    <>
        <div className='flex flex-row justify-around pt-30'>
            <div>
                <img className='w-[400px] h-[400px] bg-gray-100 p-2 mt-10' src={feedback} alt=''/>
            </div>
        <div className='mt-10'>
            <input className='p-2 w-100 mt-6 m-auto block border border-gray-300 outline-none bg-white' type='text' id="name" placeholder='Enter Your Name'/>
            <input className='p-2 w-100 mt-6 m-auto block border border-gray-300 outline-none bg-white' type='text' id="course" placeholder='Enter Your Course'/>
            <input className='p-2 w-100 mt-6 m-auto block pb-46 border border-gray-300 outline-none bg-white' type='text' row="8" id="feedback"placeholder='Enter Feedback!'/>
        </div>
    </div>
    </>
  )
}

export default Feedback;