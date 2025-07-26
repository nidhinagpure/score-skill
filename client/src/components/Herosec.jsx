import React from 'react'
import main_img from "./../assets/main_img.png";

const Herosec = () => {
    return (
        <div className="w-full px-4 py-10">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly gap-8 mt-30">
                
                {/* Left Content */}
                <div className="text-center lg:text-left max-w-2xl">
                    <p className="text-2xl text-green-500 font-bold mb-4 leading-relaxed">
                        Start learning.<br />Start winning.<br />Start now. 🛩️
                    </p>
                    <p className="text-gray-700 mb-4">
                        In earlier times, students learned only through physical classrooms. There were limited resources — no online quizzes, no interactive assignments, and fewer ways to test knowledge. Learning was mostly passive, and motivation was often low.
                    </p>
                    <p className="text-gray-700">
                        But today, the digital world has transformed education. With online platforms, students can access lessons anytime, practice with quizzes, complete assignments, and even earn rewards through gamification. This not only boosts engagement but also makes learning more enjoyable and effective.
                    </p>
                    
                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex flex-row justify-center lg:justify-start gap-4">
                        <button className=" font-bold shadow shadow-gray-500 drop-shadow-lg w-35 bg-blue-200 hover:bg-blue-300 text-sm px-6 py-2 rounded transition duration-200 ease-in-out">
                            Login
                        </button>
                        <button className=" font-bold shadow shadow-gray-500 drop-shadow-lg w-35 bg-blue-200 hover:bg-blue-300 text-sm px-6 py-2 rounded transition duration-200 ease-in-out">
                            Add Details
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full max-w-md">
                    <img className="w-full h-auto" src={main_img} alt="Learning Illustration" />
                </div>
            </div>
        </div>
    );
};

export default Herosec;
