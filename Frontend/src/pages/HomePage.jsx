import React, { useMemo, useState } from "react";
// import UserLayout from "../../utils/UserLayout";
import logo from '../assets/logo.svg'
import LeftBar from '../utils/LeftBar'

const HomePage = () => {
    const text = "This is home page";
    return (
        <div className="layout">
          <LeftBar />
        </div>
      );
    
}


export default HomePage;