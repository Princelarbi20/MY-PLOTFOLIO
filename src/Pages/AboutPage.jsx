import React from 'react'
import pic from "../assets/bg3.jpg"
import { FaCode } from "react-icons/fa";
import { PiShippingContainerBold } from "react-icons/pi";
import { MdDesignServices } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { FaRProject } from "react-icons/fa6";
import { MdAddIcCall } from "react-icons/md";
import { useState,useEffect } from 'react';

export const AboutPage = () => {
 
  
  return (
    <div className="h-screen w-full grid sm:grid-cols-2 items-center p-10">

      {/* ================= LEFT SIDE (IMAGE) ================= */}
      <div className="h-[90vh] hidden sm:block">
        <img 
          src={pic} 
          alt="my picture" 
          className="object-contain w-full h-full"
        />
      </div>

      {/* ================= RIGHT SIDE (CONTENT) ================= */}
      <div className="h-[90vh] ">

        {/* Title */}
        <h2 className="text-white text-4xl mb-7">
          About <span className="text-orange-500">Me</span>
        </h2>

        {/* Subtitle */}
        <p className="text-orange-300 mb-3">
          A Junior Developer & UI/UX Designer
        </p>

        {/* Description */}
        <p className="text-orange-100">
          I create digital experiences that combine innovative technology with elegant design.
          With expertise in both frontend and backend development, I deliver solutions that are 
          visually stunning, highly functional, and user-friendly.
        </p>

        {/* ================= SKILLS (FRONTEND & BACKEND) ================= */}
        <div className="mt-5 grid grid-cols-2 gap-5">

          {/* Frontend */}
          <div>
            <h3 className="flex items-center gap-3 text-[20px] text-orange-400 font-bold">
              <FaCode />
              Frontend
            </h3>
            <p className="text-white mt-2">
              React, JavaScript, TypeScript & TailwindCSS
            </p>
          </div>

          {/* Backend */}
          <div>
            <h3 className="flex items-center gap-3 text-[20px] text-orange-400 font-bold">
              <PiShippingContainerBold />
              Backend
            </h3>
            <p className="text-white mt-2">
              NodeJS, Express, REST API
            </p>
          </div>

        </div>

        {/* ================= DESIGN & TOOLS ================= */}
        <div className="mt-5 grid grid-cols-2 gap-5">

          {/* Design */}
          <div>
            <h3 className="flex items-center gap-3 text-[20px] text-orange-400 font-bold">
              <MdDesignServices />
              Design
            </h3>
          </div>

          {/* Tools */}
          <div>
            <h3 className="flex items-center gap-3 text-[20px] text-orange-400 font-bold">
              <BsTools />
              Tools
            </h3>
            <p className="text-white mt-2">
              VS Code, Vercel, Webpack, Postman, Redux
            </p>
          </div>
         <div className="flex gap-10 w-full mt-7">
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 text-white">
              <FaRProject />
              Projects
            </button>

            <button className="border border-orange-400 px-6 py-3 rounded-xl hover:bg-orange-500/10   text-orange-500 flex items-center gap-2">
            <MdAddIcCall />
              Contact
            </button>
          </div>
        </div>
  
      </div>
    </div>
  )
}