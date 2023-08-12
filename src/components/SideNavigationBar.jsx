import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNavigationBar = () => {
    const activeStyle = {

        color: "#00ADB5",
      
      }
  return (
    <div>
        <nav>
            <NavLink to="/" style={({isActive}) => 
          (isActive ? activeStyle : undefined)} >
Dashboard
            </NavLink>
            <NavLink to="/departments" style={({isActive}) => 
          (isActive ? activeStyle : undefined)}>
Departments
            </NavLink>
            <NavLink to="/products" style={({isActive}) => 
          (isActive ? activeStyle : undefined)}>
Products
</NavLink>
        </nav>
    </div>
  )
}

export default SideNavigationBar