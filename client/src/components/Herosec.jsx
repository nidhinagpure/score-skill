import React from 'react'
import main_img from "./../assets/main_img.png";

const Herosec = () => {
    return (
        <div className='pt-30 flex justify-around'>
            <div>
                <p className='text-2xl pt-16 text-green-500 font-bold text-shadow-lg/10'>Start learning.<br></br>  Start winning. <br></br>Start now. 🛩️</p>
                <p className='w-130 mt-4'>
                    In earlier times, students learned only through physical classrooms. There were limited resources — no online quizzes, no interactive assignments, and fewer ways to test knowledge. Learning was mostly passive, and motivation was often low.<p />
                    <p className='w-130 pt-6'> But today, the digital world has transformed education. With online platforms, students can access lessons anytime, practice with quizzes, complete assignments, and even earn rewards through gamification. This not only boosts engagement but also makes learning more enjoyable and effective.</p>
                </p>

            </div>

            <div className=''>
                <img className='w-120 h-auto' src={main_img} alt="" />
            </div>
        </div>

    )
}

export default Herosec
