
const Button = (props) => {
    var text = props.text
    var bg_color = props.bg_color
    var classes = bg_color + " button"
    console.log(classes)
    
    return (
        <div className={classes}>
            {text}
        </div>
    );
}


export default Button;
