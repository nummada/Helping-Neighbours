import React from "react";
import { Image, TouchableHighlight} from "react-native";
import WannaHelp from "../../pages/WannaHelp";
import logo from "../../assets/logo.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

const LeftBarButton = (props) => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    var image_path = props.image_path
    var text = props.text
    var link = props.link
    var needsAuthentication = props.needsAuthentication
    var login = needsAuthentication && !(isAuthenticated)
    const navigate = useNavigate();

    return (

        <div className="left-bar-button">
            <button className="transparent-bgk-button" onClick={() => login ? loginWithRedirect(): navigate(link)}>
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
  
export default LeftBarButton;
