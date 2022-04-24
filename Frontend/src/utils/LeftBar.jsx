import React from "react";
import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../assets/logo.svg";
import { MdTableRows, MdLeaderboard } from "react-icons/md";
import { View, Image, Text, StyleSheet, TouchableHighlight} from "react-native";
import HomePage from "../pages/HomePage";
import WannaHelp from "../pages/WannaHelp";

export function CustomLink({ children, to, ...props }) {
  const resolved = useResolvedPath(to);
  const location = useLocation();
  const match =
    useMatch({ path: resolved.pathname, end: true }) ??
    location.pathname.includes(to);

  return (
    <div>
      <Link
        to={to}
        {...props}
        className={"nav-link" + (match ? " active" : "")}
      >
        {children}
      </Link>
    </div>
  );
}

const AdminMenu = () => {
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

export default AdminMenu;
