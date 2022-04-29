import { React, Component } from "react";

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

const countyMap = new Map();

// countyMap.set("Arges", [
//     "Curtea de Arges",
//     "Tampitesti",
// ]);
// countyMap.set("Vaslui", [
//     "Husi nr 1 oras din Vaslui",
//     "Vaslui"
// ]);
// countyMap.set("Iasi", [
//     "Iasi"
// ]);
// countyMap.set("pineapple", [
//     "pineapple pen"
// ]);

const countyList = [
    {
        name: "Bucuresti"
    },
    {
        name: "Alba"
    },
    {
        name: "Arad"
    },
    {
        name: "Arges"
    },
    {
        name: "Bacau"
    },
    {
        name: "Bihor"
    },
    {
        name: "Bistrita - Nasaud"
    },
    {
        name: "Botosani"
    },
    {
        name: "Braila"
    },
    {
        name: "Brasov"
    },
    {
        name: "Buzau"
    },
    {
        name: "Calarasi"
    },
    {
        name: "Caras - Severin"
    },
    {
        name: "Cluj"
    },
    {
        name: "Constanta"
    },
    {
        name: "Constanta"
    },
    {
        name: "Covasna"
    },
    {
        name: "Dambovita"
    },
    {
        name: "Dolj"
    },
    {
        name: "Galati"
    },
    {
        name: "Giurgiu"
    },
    {
        name: "Gorj"
    },
    {
        name: "Harghita"
    },
    {
        name: "Hunedoara"
    },
    {
        name: "Ialomita"
    },
    {
        name: "Iasi"
    },
    {
        name: "Ilfov"
    },
    {
        name: "Maramures"
    },
    {
        name: "Mehedinti"
    },
    {
        name: "Mures"
    },
    {
        name: "Neamt"
    },
    {
        name: "Olt"
    },
    {
        name: "Prahova"
    },
    {
        name: "Salaj"
    },
    {
        name: "Satu Mare"
    },
    {
        name: "Sibiu"
    },
    {
        name: "Suceava"
    },
    {
        name: "Teleorman"
    },
    {
        name: "Timis"
    },
    {
        name: "Tulcea"
    },
    {
        name: "Valcea"
    },
    {
        name: "Vaslui"
    },
    {
        name: "Vrancea"
    },
];


class Tags extends Component {

    constructor() {
        super();
        this.state = {
            address: '',
            categories: [
                { id: 0, value: "Food" },
                { id: 1, value: "Accomodation" },
                { id: 2, value: "Transport" },
                { id: 3, value: "Clothes" },
                { id: 4, value: "Hygiene products" },
                { id: 5, value: "Other" }
            ],
            checkedItems: new Map(),
            countyName: '', // the whole county JSON from above
            description: '',
        };

        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handleCountyChange = this.handleCountyChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
    }

    handleCountyChange(event) {
        console.log("County: ", event.target.value)
        this.setState({ countyName: event.target.value });
        console.log("state: ", this.state)
        // console.log("countymap: ", countyMap)
    }

    handleAddressChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        // console.log("Address, bitch:", this.state.address)
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
                                <select className="select-county" value={this.state.county} onChange={this.handleCountyChange} defaultValue={""}>
                                    <option value="" hidden disabled>Select county</option>
                                    {countyList.map((county) => (
                                        <option key={county.name} value={county.name}>{county.name}</option>
                                    ))}
                                </select>
                                <textarea className="address-layout"
                                    type="text"
                                    name={"address"}
                                    placeholder={"City, street and number"}
                                    onChange={this.handleAddressChange}
                                    value={this.state.address}
                                />

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
