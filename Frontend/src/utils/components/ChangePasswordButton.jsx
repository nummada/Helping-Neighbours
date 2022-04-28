import { useNavigate } from 'react-router-dom';

const ChangePasswordButton = (props) => {
    var bg_color = props.bg_color
    var type = props.type
    const navigate = useNavigate();

    return (
        <div>
            <button className="transparent-bgk-button" onClick={() => { navigate("/change-password") }}>
                <div className={bg_color + " " + type}>
                    Change your password
                </div>
            </button>
        </div>
    );
}


export default ChangePasswordButton;
