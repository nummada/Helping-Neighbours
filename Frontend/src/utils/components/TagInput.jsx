const TagInput = (props) => {
    var value = props.value
    var onChange = props.onChange
    var isChecked = props.isChecked
    return (
        <div className="post-tag">
            <input
                type="checkbox"
                value={value}
                onChange={onChange}
                checked={isChecked}
            /> {value}
        </div>
    );
}

export default TagInput;