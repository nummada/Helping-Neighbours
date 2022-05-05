import { React, useEffect, useState } from "react";
import CountyList from "../CountyList";
import TagInput from "../TagInput";
import { useAuth0 } from "@auth0/auth0-react";
import api from "../../../api";


const WantToHelpContent = () => {
    return (
        <div className="wanna-help-layout">
            <Tags />
        </div>
    );
}


const Tags = () => {
    var { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        console.log("isAuthenticated = [%O]", isAuthenticated)
    },
        [user, isAuthenticated])

    var [address, setAddress] = useState('')
    var [checkedTags, setCheckedTags] = useState({
        "Food": false,
        "Accomodation": false,
        "Transport": false,
        "Clothes": false,
        "Hygiene Products": false,
        "Other": false,
    })
    var [countyName, setCountyName] = useState('')
    var [description, setDescription] = useState('')

    var categories = [...Object.keys(checkedTags)]

    const tagsNameMap = {
        "Food": 'FOOD',
        "Accomodation": 'ACCOMODATION',
        "Transport": 'TRANSPORT',
        "Clothes": 'CLOTHES',
        "Hygiene Products": 'HYGIENE_PRODUCTS',
        "Other": 'OTHER',
    }

    const mapTags = () =>
        Object.keys(checkedTags)
            .filter((tag) => checkedTags[tag])
            .map((tag) => tagsNameMap[tag])

    const handleCountyChange = (event) => {
        console.log("County: ", event.target.value)
        setCountyName(event.target.value)
    }

    const handleAddressChange = (event) => {
        console.log("Address: ", event.target.value)
        setAddress(event.target.value)
    }

    const handleTagChange = (event) => {
        var isChecked = event.target.checked;
        var item = event.target.value;

        console.log("tag[%O]=isChecked[%O]", item, isChecked)

        setCheckedTags(prevState => ({
            ...prevState,
            [item]: isChecked
        }
        ));
    }

    const handleDescriptionChange = (event) => {
        console.log("Description: ", event.target.value)
        setDescription(event.target.value)
    }

    const handleSubmit = (event) => {
        console.log("Submit");
        event.preventDefault();

        if (countyName === '') {
            alert("pick county bitch")
            return
        }

        if (address === '') {
            alert("type some address bitch")
            return
        }

        if (description === '') {
            alert("description cannot be empty bitch")
            return
        }

        if (Object.keys(checkedTags).filter(key => checkedTags[key]).length === 0) {
            alert("Select one or more of the following tags\nCan you not fucking read?")
            return
        }

        if (!isAuthenticated) {
            alert("Please try again")
            console.log("User not authenticated when trying to post??")
            return
        }

        // TODO: aici api call
        api.createPost({
            benefactorId: user.sub,
            description,
            tags: mapTags(),
            benefCounty: countyName,
            benefAddress: address
        })
            .then((res) => {
                console.log("[WantToHelpContent][api][createPost][Ok][res = %O]", res.data)

            })
            .catch((err) => {
                console.log("[WantToHelpContent][api][createPost][error = %O]", err)
            })
    }

    return (
        <div>
            <div className="page-title">
                How do you want to help?
            </div>
            <form className="wanna-help-content" onSubmit={handleSubmit}>
                <div className="top-content-wanna-help">
                    <div className="enter-location">
                        Enter your location
                        <div className="select-container">
                            <select className="select-county" value={countyName} onChange={handleCountyChange}>
                                <option value="" hidden disabled>Select county</option>
                                {CountyList.map((county) => (
                                    <option key={county.name} value={county.name}>{county.name}</option>
                                ))}
                            </select>
                            <textarea className="address-layout"
                                type="text"
                                name={"address"}
                                placeholder={"City, street and number"}
                                onChange={handleAddressChange}
                                value={address}
                            />

                        </div>
                    </div>
                    <div className="tags-and-image">
                        <div className="twoxl-text">
                            Select one or more of the following tags
                        </div>
                        <div className="tags">
                            <TagInput
                                value={categories.at(0)}
                                onChange={handleTagChange}
                            />
                            <TagInput
                                value={categories.at(1)}
                                onChange={handleTagChange}
                            />
                            <TagInput
                                value={categories.at(2)}
                                onChange={handleTagChange}
                            />
                        </div>
                        <div className="tags">
                            <TagInput
                                value={categories.at(3)}
                                onChange={handleTagChange}
                            />
                            <TagInput
                                value={categories.at(4)}
                                onChange={handleTagChange}
                            />
                            <TagInput
                                value={categories.at(5)}
                                onChange={handleTagChange}
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
                        onChange={handleDescriptionChange}
                        value={description}
                    />

                </div>
                <div className="post-button-container ">
                    <button className="transparent-bgk-button" onClick={() => handleSubmit}>
                        <div className={"bkg-blue" + " " + "medium-button"}>
                            {"Post"}
                        </div>
                    </button>
                </div>

            </form>
        </div>
    );
}


export default WantToHelpContent;
