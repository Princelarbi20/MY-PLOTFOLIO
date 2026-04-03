import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './component/NavBar'
export const Rootlayer = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
}

