/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Ahmad Robi</h1>
                <Typed
                    className="typed-text"
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    strings={["Web Development", "Frontend Development"]}
                />
                <a href="#contact" className="btn-main-offer">
                    contact me
                </a>
            </div>
        </div>
    );
};

export default Header;
