import React, { useMemo, useState } from "react";
// import UserLayout from "../../utils/UserLayout";
import logo from '../assets/logo.svg'

const ModifyPost = () => {
    const text = "This is ModifyPost page";
    return (
        <div className="ModifyPost">
            <header className="ModifyPost-header">
                <img src={logo} alt="logo" />
                <p>
                    {text}
                </p>
            </header>
        </div>
    );
}


export default ModifyPost;