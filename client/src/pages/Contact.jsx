import React from "react";

import { NavLink } from "react-router";
import email from "./../assets/email.png";
import github from "./../assets/github.png";
import linkedin from "./../assets/linkedin.png";

const Contact = () => {
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "003b71fa-e00b-41d4-a257-a2fe662bcb5e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted Successfully !!😊");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
<div className="pt-26 sm:pt-10 md:pt-40 flex flex-col md:flex-row gap-10 ml-2  md:ml-60 sm:ml-2 mb-6 sm:mb-6 md:mb-40">
      <div className="flex-1">
        <p className="text-4xl font-bold">Drop Us a Line</p>
        <p className="text-gray-700  mt-6">If you have any inquiries related to our platform,
          features, or services, feel free to connect. We aim to respond within 24 hours.</p>
        <p className="font-bold text-lg pt-4">Address:</p>
        <p className="text-gray-700">ScoreSkill Learning Pvt. Ltd.<br></br>
          3rd Floor, Technopark Building,<br></br>
          Hinjewadi Phase 2, Rajiv Gandhi Infotech Park,<br></br>
          Pune, Maharashtra -411057<br></br>
          India</p>
        <div className="pt-2">
          <span className="flex gap-4 pt-4 font-bold text-lg text-gray-700 "><img className="w-8 h-8" src={email} />info@scoreskill.com</span>
          <NavLink to="https://github.com/nidhinagpure">
            <span className="flex gap-4 pt-4 font-bold text-lg text-gray-700"><img className="w-8 h-8" src={github} />Github</span>
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/nidhi-nagpure-160110283/">
            <span className="flex gap-4 pt-4 font-bold text-lg text-gray-700"><img className="w-8 h-8" src={linkedin} />Linkedin</span>
          </NavLink>
        </div>

      </div>

      <div className="flex-1 sm:flex-raw">
        <form onSubmit={onSubmit}>
          <input className=" flex flex-row w-100 p-2 border border-gray-500 mt-4 outline-none rounded bg-white" type="text" id="name" placeholder="Enter Your Name" required />
          <input className=" flex flex-row w-100 p-2 border border-gray-500 mt-4 outline-none rounded bg-white" type="email" id="email" placeholder="your email" required />
          <input className=" flex flex-row w-100 p-2 border border-gray-500 mt-4 outline-none rounded bg-white" type="tel" id="number" name="phone" placeholder="Enter Number" pattern="[0-9]{10}" required />
          <input className=" flex flex-row w-100 p-2 border border-gray-500 mt-4 outline-none pb-35 rounded bg-white" type="text" id="message" placeholder="How can we help you ?" required />
        </form>
        <button className=" mt-4 font-bold shadow shadow-gray-500 
        drop-shadow-lg w-35 bg-blue-200 
        hover:bg-blue-300 text-sm px-6 py-2 rounded transition duration-200 ease-in-out"
        >Submit</button><span>{result}</span>



      </div>
    </div>
  )
}

export default Contact;