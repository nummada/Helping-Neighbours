import React from "react";
import { Image, TouchableHighlight} from "react-native";
import WannaHelp from "../../pages/WannaHelp";
import logo from "../../assets/logo.svg";


const LeftBar = () => {
  return (
    // <div className="logo-container">
    //   <img src={logo} alt="Helping Neighbours" />
    // </div>,
    <div className="admin-menu">
      <nav className="left-bar">
        <div className="left-bar-button">
          {/* <CustomLink to={"/"}>
            <MdTableRows /> HomePage
            <img src={logo} width="100" height="50" />
          </CustomLink> */}

          <a href='/'><img src={logo} width="150" height="100"/></a>
        </div>
        {/* <CustomLink to={"/want-to-help"}>
          <MdLeaderboard /> WannaHelp
        </CustomLink> */}
        {/* <a href="/want-to-help"></a><img src={logo} width="100" height="50" /> */}

          <a href='/want-to-help'><img src={logo} width="150" height="100"/></a>
          <TouchableHighlight onPress={() => WannaHelp}>
            <Image
              style={{
                resizeMode: "contain",
                height: 100,
                width: 150
              }}
              source={logo}
            />
          </TouchableHighlight>

      </nav>
    </div>
  );
};

export default LeftBar;
