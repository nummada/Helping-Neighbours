import React, { useMemo, useState } from "react";
// import UserLayout from "../../utils/UserLayout";
import logo from '../assets/logo.svg'

const MyPosts = () => {
    const text = "This is MyPosts page";
    return (
        <div className="MyPosts">
            <header className="MyPosts-header">
                <img src={logo} alt="logo" />
                <p>
                    {text}
                </p>
            </header>
        </div>
    );
}


export default MyPosts;