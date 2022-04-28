import { useNavigate } from 'react-router-dom';

const Button = (props) => {
    var text = props.text
    var bg_color = props.bg_color
    var on_click_function = props.on_click_function
    var type = props.type
    return (
        <div>
            <button className="transparent-bgk-button" onClick={() => { select_function(on_click_function) }}>
                <div className={bg_color + " " + type}>
                    {text}
                </div>
            </button>
        </div>
    );
}




function select_function(on_click_function) {
    switch (on_click_function) {
        case 'interested':
            return interested()
        case 'modify':
            return modify()
        case 'delete':
            return delete_post()
        default:
            console.log("ups")
    }
}

// aici trebuie sa preluam ceva informatii despre ce postare a fost apasata
// TODO: implement function
function interested() {
    console.log("Pressed interested.")
}

function modify() {
    console.log("Pressed modify.")
}

function delete_post() {
    console.log("Pressed delete.")
}

export default Button;
