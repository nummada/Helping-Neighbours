import React from "react";
import { Image, TouchableHighlight} from "react-native";
import WannaHelp from "../../pages/WannaHelp";
import logo from "../../assets/logo.svg";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = (props) => {
    var image_path = props.image_path
    var text = props.text
    var link = props.link
    const { logout } = useAuth0();

    return (

        <div className="left-bar-button">
            <button className="login-button-button" onClick={() => logout({ returnTo: link })}>
                <div>
                    <img src={image_path} width="80px" height="68px" />
                </div>
                <div className="lime-text">
                    {text}
                </div>
            </button>
        </div>


        
    );
  };
  
export default LogoutButton;
