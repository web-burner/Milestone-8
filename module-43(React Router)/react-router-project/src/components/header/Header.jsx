// import React from 'react';

import { NavLink} from "react-router";
import './nav.css'

const Header = () => {
    return (
        <nav className="nav">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/mobiles'}>Mobiles</NavLink>
            <NavLink to={'/laptops'}>Laptops</NavLink>
            <NavLink to={'/users1'}>Users1</NavLink>
            <NavLink to={'/users2'}>Users2</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
        </nav>
    );
};

export default Header;