import { React, Component, useRef } from "react";

const WantToHelpContent = () => {

    return (
        <div className="wanna-help-layout">
            <Tags />
        </div>
    );
}


const Input = (props) => {
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

const county = [
    {
        value: "Arges",
        cities: [

        ]
    },
    {
        value: "mango",
    },
    {
        value: "banana",
    },
    {
        value: "pineapple",
    },
];

class Tags extends Component {

    constructor() {
        super();
        this.state = {
            categories: [
                { id: 0, value: "Food" },
                { id: 1, value: "Accomodation" },
                { id: 2, value: "Transport" },
                { id: 3, value: "Clothes" },
                { id: 4, value: "Hygiene products" },
                { id: 5, value: "Other" }
            ],
            checkedItems: new Map(),
            description: '',
            county: 'empty'
        };

        this.handleTagChange = this.handleTagChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCountyChange = this.handleCountyChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    }

    handleCountyChange(e) {
        console.log("County: " + e.target.value)
        this.setState({ county: e.target.value });
    }

    handleTagChange(event) {
        var isChecked = event.target.checked;
        var item = event.target.value;

        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }

    handleDescriptionChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <div className="page-title">
                    How do you want to help?
                </div>
                <form className="wanna-help-content" onSubmit={this.handleSubmit}>
                    <div className="top-content-wanna-help">
                        <div className="enter-location">
                            Enter your location
                            <div className="select-container">
                                <select value={this.state.fruit} onChange={this.handleCountyChange}>
                                    {county.map((option) => (
                                        <option key={option.value} value={option.value}>{option.value}</option>
                                    ))}
                                </select>
                                {/* aici blockcode care ia orasele din this.state.county */}
                                <select value={this.state.fruit} onChange={this.handleCountyChange}>
                                    {county.map((option) => (
                                        <option key={option.value} value={option.value}>{option.value}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="tags-and-image">
                            <div className="twoxl-text">
                                Select one or more of the following tags
                            </div>
                            <div className="tags">
                                <Input
                                    value={this.state.categories.at(0).value}
                                    onChange={this.handleTagChange}
                                />
                                <Input
                                    value={this.state.categories.at(1).value}
                                    onChange={this.handleTagChange}
                                />
                                <Input
                                    value={this.state.categories.at(2).value}
                                    onChange={this.handleTagChange}
                                />
                            </div>
                            <div className="tags">
                                <Input
                                    value={this.state.categories.at(3).value}
                                    onChange={this.handleTagChange}
                                />
                                <Input
                                    value={this.state.categories.at(4).value}
                                    onChange={this.handleTagChange}
                                />
                                <Input
                                    value={this.state.categories.at(5).value}
                                    onChange={this.handleTagChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="down-content-wanna-help">

                        <div className="twoxl-text">
                            Description
                        </div>

                        <textarea className="description-layout"
                            type="text"
                            name={"description"}
                            placeholder={"Here is the description of your post"}
                            onChange={this.handleDescriptionChange}
                            value={this.state.description}
                        />

                    </div>
                    <div className="post-button-container ">
                        <button className="transparent-bgk-button" onClick={() => this.handleSubmit}>
                            <div className={"bkg-blue" + " " + "medium-button"}>
                                {"Post"}
                            </div>
                        </button>
                    </div>

                </form>
            </div>
        );
    }
}


export default WantToHelpContent;
