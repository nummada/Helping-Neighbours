
const LimeContent = (props) => {
    var content = props.content
    return (
		<div className="lime-page-container">
			<div className="lime-page">
				<props.content/>
			</div>
		</div>
    );
}


export default LimeContent;
