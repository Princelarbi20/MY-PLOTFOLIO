import React from 'react'
import { useEffect, useState } from "react";
import pic from "../assets/bg3.jpg"
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const skills = ["FRONTEND DEVELOPPER", "UI DESIGNER", "PRODUCT DESIGNER"]
export const HomePage = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = skills[index];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % skills.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div className="h-screen w-full bg-blue-500 flex flex-row items-center pl-10 sm:gap-70">

    <div className="flex flex-col items-center gap-16 sm:flex-row sm:justify-between">

  {/* LEFT TEXT */}
  <div className="flex flex-col text-center sm:text-left max-w-[600px]">
    
    <h1 className="font-bold text-[28px] sm:text-[60px] leading-tight">
      HI! MY NAME IS  <span className="text-white">LARBI</span>
     
    </h1>

    <h2 className="mt-4 text-[18px] sm:text-[28px] font-medium text-gray-600">
      <span className="text-green-500 font-bold">{text}</span>
    </h2>

    {/* BUTTON + ICONS */}
    <div className="flex items-center justify-center sm:justify-start gap-5 mt-10 flex-wrap">
      
      {/* BUTTON */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition duration-300 shadow-md hover:scale-105 flex items-center gap-2 ">
        GET IN TOUCH
        <FaArrowRight />
      </button>

      {/* ICONS */}
      <div className="flex gap-4 text-[20px]">
        
        <div className="p-3 rounded-full bg-blue-600 text-white hover:scale-110 hover:shadow-lg transition duration-300 cursor-pointer">
          <FaFacebookSquare />
        </div>

        <div className="p-3 rounded-full bg-green-500 text-white hover:scale-110 hover:shadow-lg transition duration-300 cursor-pointer">
          <FaWhatsapp />
        </div>

        <div className="p-3 rounded-full bg-gray-800 text-white hover:scale-110 hover:shadow-lg transition duration-300 cursor-pointer">
          <FaGithub />
        </div>

      </div>

    </div>
  </div>

</div>
        {/* side image container */}
      

        <div className="group relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] flex items-center justify-center rounded-full overflow-hidden transition duration-500 hover:scale-105">

  {/* Glow effect */}
  <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 blur-2xl transition duration-500"></div>

  <img
    src={pic}
    alt="my personal picture"
    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg transition duration-500 group-hover:scale-110"
  />

</div>
      </div>

  )
}

