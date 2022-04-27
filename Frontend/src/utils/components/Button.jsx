
const Button = (props) => {
    var text = props.text
    var bg_color = props.bg_color
    var on_click_function = props.on_click_function
    return (
        <div>
            <button className="transparent-bgk-button" onClick={() => {select_function(on_click_function)}}>
                <div className={bg_color + " button"}>
                    {text}
                </div>
            </button>
        </div>
    );
}


function select_function(on_click_function) {
    switch(on_click_function) {
        case 'interested':
          return interested()
      }
}

// aici trebuie sa preluam ceva informatii despre ce postare a fost apasata
// TODO: implement function
function interested() {
    console.log("Pressed interested.")
}

export default Button;
