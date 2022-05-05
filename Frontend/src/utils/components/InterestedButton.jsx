import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

const InterestedButton = (props) => {

    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const navigate = useNavigate();
    var text = props.text
    var bg_color = props.bg_color
    var needsAuthentication = props.needsAuthentication
    var login = needsAuthentication && !(isAuthenticated)
    var type = props.type
    var benefactorEmail = props.benefactorEmail

    const sendNotification = () => {
        console.log("[Post][InterestedButton][sendNotification] \
        here we should send a notification on email to ", benefactorEmail)
    }

    return (
        <div>
            <button className="transparent-bgk-button" onClick={() => { login ? loginWithRedirect(): sendNotification() }}>
                <div className={bg_color + " " + type}>
                    {text}
                </div>
            </button>
        </div>
    );
}


export default InterestedButton;
