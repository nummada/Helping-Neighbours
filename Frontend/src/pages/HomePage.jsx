import React, { useMemo, useState } from "react";
// import UserLayout from "../../utils/UserLayout";
import logo from '../assets/logo.svg'
import LeftBar from '../utils/components/LeftBar'
import LimeContent from "../utils/components/LimeContent";
import TopBar from "../utils/components/TopBar";

const HomePage = () => {
    const text = "This is home page";
    return (
      // page-layout is in column
        <div className="page-layout">
          <TopBar login_flag={0}/>
          {/* page includes left bar and content, flex*/}
          <div className="page">
            <LeftBar />
            {/* TODO: la LimeContent trebuie sa trimitem ca parametru continutul specific paginii homepage
                adica ceva clasa/const cu poza de sus, filtrele si postarile. pentru restul paginilor care au
                tot asa lime background, facem la fel, cate o componenta care sa contina tot ce trebuie
            */}
            <div className="lime-page-container">
              <LimeContent />
            </div>
          </div>
        </div>
      );
}


export default HomePage;
