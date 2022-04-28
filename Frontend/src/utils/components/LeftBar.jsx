import React from "react";
import { Image, TouchableHighlight} from "react-native";
import WannaHelp from "../../pages/WannaHelp";
import logo from "../../assets/logo.svg";
import LeftBarButton from "./LeftBarButton";
import Home from "../../assets/buttons/home.png"
import WantToHelp from "../../assets/buttons/want_to_help.png"
import AboutUs from "../../assets/buttons/about_us.png"
import Logout from "../../assets/buttons/logout.png"
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const LeftBar = () => {
	const { isAuthenticated, loginWithRedirect } = useAuth0();
	const { logout } = useAuth0();

	if (isAuthenticated) {
		return (
			<div className="left-bar">
				<div>
					<LeftBarButton
						image_path={Home}
						text="Home page"
						link="/" needsAuthentication={false}
					/>
					<LeftBarButton
						image_path={WantToHelp}
						text="I want to help"
						link="/want-to-help"
						needsAuthentication={true}
					/>
					<LeftBarButton
						image_path={AboutUs}
						text="About us"
						link="/about-us"
						needsAuthentication={false}/>
				</div>
				<div className="left-bar-logout">
					<LogoutButton
						image_path={Logout}
						text="Logout"
						link={window.location.origin}
					/>
				</div>
			</div>
		);
	}

	// if not authenticated, do not show logout button
	return (
		<div className="left-bar">
			<div>
				<LeftBarButton image_path={Home} text="Home page" link="/" needsAuthentication={false}/>
				<LeftBarButton image_path={WantToHelp} text="I want to help" link="/want-to-help" needsAuthentication={true}/>
				<LeftBarButton image_path={AboutUs} text="About us" link="/about-us" needsAuthentication={false}/>
			</div>
		</div>
	);
};

export default LeftBar;
