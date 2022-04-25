
const PostPersonData = (props) => {
    var icon_src = props.icon
    var text = props.text
    return (
        <div className='little-icon-and-text'>
            <img src={icon_src} width="24px" height="24px" />
            {text}
        </div>
    );
}


export default PostPersonData;
