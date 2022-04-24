import React, { useMemo, useState } from "react";
// import UserLayout from "../../utils/UserLayout";
import logo from '../assets/logo.svg'

const AboutUs = () => {
    const text = "This is abous us page";
    return (
        <div className="AboutUs">
            <header className="AboutUs-header">
                <img src={logo} alt="logo" />
                <p>
                    {text}
                </p>
            </header>
        </div>
    );
}


export default AboutUs;