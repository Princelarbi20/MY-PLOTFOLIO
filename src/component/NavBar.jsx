import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NavData } from '../NavData'
import "./Component.css"
import { FaBars } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";

export const NavBar = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <nav  className='bg-green-400 p-4 text-white'>
        <div className="flex justify-between items-center">

          {/* Logo */}
          <h1 className="font-bold text-xl">LOGO</h1>

          {/* Desktop Menu */}
          <div className='hidden sm:block'>
            <ul className="flex gap-10 list-none md:gap-20">
              {NavData.map(({ name, path }) => (
                <li key={path}>
                  <NavLink 
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-bold" : ""
                    }
                  >
                    {name.toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <Link className='flex p-2 bg-blue-300 items-center gap-2 rounded-full hover:bg-blue-500 transition duration-300 ease-in-out text-white font-bold px-5'>
            <p>Lets talk</p>
            <MdOutlinePhoneInTalk />
          </Link>

          {/* Mobile Menu Icon */}
          <div className="sm:hidden">
            <FaBars 
              className="cursor-pointer text-2xl" 
             onClick={()=>setShow(!show)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div>
        <ul className={` ${show ? "flex" : "hidden"} flex flex-col gap-6 list-none md:gap-20 absolute bg-blue-200 w-full p-6`}>
              {NavData.map(({ name, path }) => (
                <li key={path}>
                  <NavLink 
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "text-blue-600 font-bold" : ""
                    }
                  >
                    {name.toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
      </div>
   
    </>
  )
}