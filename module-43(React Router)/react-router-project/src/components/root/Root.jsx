// import React from 'react';

import { Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Root = () => {
    return (
        <div>
            <h2>Welcome To React Router</h2>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;