import React, { useMemo, useState } from "react";
// import UserLayout from "../../utils/UserLayout";
import logo from '../assets/logo.svg'

const WannaHelp = () => {
    const text = "This is WannaHelp page";
    return (
        <div className="Profile">
            <header className="WannaHelp-header">
                <img src={logo} alt="logo" />
                <p>
                    {text}
                </p>
            </header>
        </div>
    );
}


export default WannaHelp;