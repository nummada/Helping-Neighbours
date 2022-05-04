const TagInput = (props) => {
    var value = props.value
    var onChange = props.onChange
    return (
        <div className="post-tag">
            <input
                type="checkbox"
                value={value}
                onChange={onChange}
            /> {value}
        </div>
    );
}

export default TagInput;