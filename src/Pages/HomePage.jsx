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
  
    const [counter, setCounter] = useState(0);
    const [counter2,setCounter2]=useState(0);
    const [counter3, setCounter3]=useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 20) {
          clearInterval(interval); // stop at 20
          return prev;
        }
        return prev + 1;
      });
    }, 50); // ⏱ delay (100ms)

    return () => clearInterval(interval); // cleanup
  }, []);

  {/**counter 2 */}
    useEffect(() => {
    const interval = setInterval(() => {
      setCounter2((prev) => {
        if (prev >= 6) {
          clearInterval(interval); // stop at 20
          return prev;
        }
        return prev + 1;
      });
    }, 100); // ⏱ delay (100ms)

    return () => clearInterval(interval); // cleanup
  }, []);


   {/**counter 3 */}
    useEffect(() => {
    const interval = setInterval(() => {
      setCounter3((prev) => {
        if (prev >= 6) {
          clearInterval(interval); // stop at 20
          return prev;
        }
        return prev + 1;
      });
    }, 100); // ⏱ delay (100ms)

    return () => clearInterval(interval); // cleanup
  }, []);

  
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
    <>

    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#ff5f00] text-white flex items-center justify-center p-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 ">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-orange-400">Prince</span> 👋
          </h1>

          <p className="text-lg text-gray-300">
            Full-Stack Developer & UI/UX Enthusiast. I craft modern and  <span className='text-orange-500'>{text}</span>
          </p>

          <div className="flex gap-4 mb-10">
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl shadow-lg">
              Contact Me
            </button>

            <button className="border border-orange-400 px-6 py-3 rounded-xl hover:bg-orange-500/10">
              Download CV
            </button>
          </div>

          <div className='flex justify-between '>
            <div className='flex flex-col border-5 border-orange-400 p-2 rounded-full items-center justify-center' >
              <h2 className="text-orange-400 font-bold text-2xl">{counter} +</h2>
              <p className="text-gray-400">Projects</p>
            </div>

            <div  className='flex flex-col border-5 border-orange-400 p-2 rounded-full items-center justify-center'>
              <h2 className="text-orange-400 font-bold text-2xl">{counter3} +</h2>
              <p className="text-gray-400">Months</p>
            </div>

            <div className='flex flex-col border-5 border-orange-400 p-2 rounded-full items-center justify-center'>
              <h2 className="text-orange-400 font-bold text-2xl">{counter2} +</h2>
              <p className="text-gray-400">Clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          
          {/* ORANGE GLOW */}
          <div className="absolute w-72 h-72 bg-orange-500 rounded-full blur-3xl opacity-50"></div>

          {/* IMAGE CONTAINER */}
          <div className="relative bg-gradient-to-br from-orange-400 to-orange-600 p-2 rounded-[40px]">
            <img
              src={pic}
              alt="profile"
              className="w-64 h-64 object-cover rounded-[30px]"
            />
          </div>
        </div>

      </div>
    </div>
    
    </>
  )
}





















