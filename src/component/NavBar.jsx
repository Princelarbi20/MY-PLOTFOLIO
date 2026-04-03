
import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavData } from '../NavData'
export const NavBar = () => {
  return (
    <div>
      <ul>
        {NavData.map(({ name, path }) => (
          <li key={path}>
            <NavLink to={path}>
              {name.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}