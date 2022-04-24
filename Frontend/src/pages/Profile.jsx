import React, { useMemo, useState } from "react";
// import UserLayout from "../../utils/UserLayout";
import logo from '../assets/logo.svg'

const Profile = () => {
    const text = "This is profile page";
    return (
        <div className="Profile">
            <header className="Profile-header">
                <img src={logo} alt="logo" />
                <p>
                    {text}
                </p>
            </header>
        </div>
    );
}


export default Profile;