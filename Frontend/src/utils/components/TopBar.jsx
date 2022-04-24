import React from "react";
import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";
import { Image, TouchableHighlight} from "react-native";
import Profile from "../../pages/Profile";
import profileIcon from "../../assets/buttons/login_signup_profile.png";
import logo from "../../assets/logo.svg";

const TopBar = (props) => {

    // TODO: vezi aici cum trebuie cu AUTH sa determini daca esti loggedin sau nu
    var login_logic = props.login_flag;

    var button_text = login_logic ? "My profile" : "Log in";
    var path = login_logic ? "/profile" : "/login";

    return (
        <div className="top-bar">
            <div className="logo-container">
                <img src={logo} width="143px" height="73px" alt="Helping Neighbours" />
            </div>
            <div className="login-button-container">
                <Link to={path} style={{ textDecoration: 'none' }}>
                    <div>
                        <img src={profileIcon} width="45px" height="45px"/>
                    </div>
                    <div className="lime-text">
                        {button_text}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default TopBar;
