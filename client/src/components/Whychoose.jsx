import React from 'react'

import choose1 from "./../assets/choose1.png";
import choose2 from "./../assets/choose2.png";
import choose3 from "./../assets/choose3.png";


const Chooseus = [
    {
        image:choose1,
        heading:"Gamified Learning Experience",
        info:"We make learning fun by turning it into a game. Earn points, badges, and climb leaderboards as you complete lessons and quizzes — making progress feel like achievement.",
    },
    {
        image:choose2,
        heading:"Interactive & Engaging Content",
        info:"Forget boring textbooks. Our platform offers interactive videos, real-time quizzes, and hands-on assignments that keep you actively involved in every lesson.",
    },
    {
        image:choose3,
        heading:"Learn Anytime, Anywhere",
        info:"Access courses on your schedule — whether you're on a phone, tablet, or laptop. Learning is flexible, convenient, and always within reach.",
    },

];

const Whychoose = () => {
    return (
<div className="mt-14 px-4">
  <p className="text-3xl font-bold text-center">
    "Why We're <span className="underline text-blue-500">Different</span>"
  </p>

  {/* Responsive Flex Container for Cards */}
  <div className="mt-8 flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-10">
    {Chooseus.map((item, index) => (
      <div
        key={index}
        className="w-full sm:w-80 md:w-72 lg:w-80 p-4 rounded-lg shadow-md bg-white transition hover:shadow-xl shadow drop-shadow-xl hover:scale-105 hover:transition duration-300"
      >
        <img
          src={item.image}
          alt=""
          className="w-full h-48 object-cover bg-gray-100 rounded"
        />
        <p className="mt-4 font-bold text-center">{item.heading}</p>
        <p className="mt-2 text-sm text-center text-gray-700">{item.info}</p>
      </div>
    ))}
  </div>
</div>
)
};

export default Whychoose
