// import React from 'react';
import { NavLink } from "react-router";
import '../../App.css'
const Navbar = () => {
  return <nav>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"users"}>Users</NavLink>
    <NavLink to={"posts"}>Posts</NavLink>
  </nav>;
};

export default Navbar;
