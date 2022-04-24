import React, { useMemo, useState } from "react";
// import UserLayout from "../../utils/UserLayout";
import logo from '../assets/logo.svg'
import LeftBar from '../utils/components/LeftBar'
import TopBar from "../utils/components/TopBar";

const HomePage = () => {
    const text = "This is home page";
    return (
        <div className="page-layout">
          <TopBar login_flag={0}/>
          {/* <LeftBar /> */}
        </div>
      );
}


export default HomePage;
