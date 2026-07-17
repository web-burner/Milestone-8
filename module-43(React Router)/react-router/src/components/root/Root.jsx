// import React from 'react';

import Navbar from "../header/Navbar";
import Footer from "../footer/Footer";
import {Outlet, useNavigation} from 'react-router';
import '../../App.css'
const Root = () => {
    const navigation = useNavigation()
    const isNavigating = Boolean(navigation.location)
    return (
        <div>
            {isNavigating && <p>Loading...</p>}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;