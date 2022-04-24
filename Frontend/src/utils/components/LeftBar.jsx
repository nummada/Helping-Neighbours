import React from "react";
import { Image, TouchableHighlight} from "react-native";
import WannaHelp from "../../pages/WannaHelp";
import logo from "../../assets/logo.svg";
import LeftBarButton from "./LeftBarButton";
import Home from "../../assets/buttons/home.png"
import WantToHelp from "../../assets/buttons/want_to_help.png"
import AboutUs from "../../assets/buttons/about_us.png"
import Logout from "../../assets/buttons/logout.png"

const LeftBar = () => {
	return (
		<div className="left-bar">
			<div>
				<LeftBarButton image_path={Home} text="Home page" link="/"/>
				<LeftBarButton image_path={WantToHelp} text="I want to help" link="/want-to-help"/>
				<LeftBarButton image_path={AboutUs} text="About us" link="/about-us"/>
			</div>
			<div className="left-bar-down">
				<LeftBarButton image_path={Logout} text="Logout" link="/logout"/>
			</div>
		</div>
	);
};

export default LeftBar;
