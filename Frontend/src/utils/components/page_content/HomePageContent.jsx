import api from '../../../api'
import FlowerHands from '../../../assets/hands-with-flowers.png'
import Post from '../Post'
import { useState, useEffect } from "react";
import TagInput from '../TagInput';
import CountyList from '../CountyList';

const HomePageContent = () => {
    var [posts, setPosts] = useState([])
    var [setectedTags, setSelectedTags] = useState([])
    var [county, setCounty] = useState("Your county");
    var checkedItems = {
        "Food": false,
        "Accomodation": false,
        "Transport": false,
        "Clothes": false,
        "Hygiene products": false,
        "Other": false
    }

    const handleCountyChange = (event) => {
        setCounty(event.target.value);
        console.log("county now: ", county)
    }

    const handleTagChange = (event) => {
        var item = event.target.value;
        checkedItems[item] = !checkedItems[item]
        console.log("[HomePageContent][handleTagChange]\n\t", checkedItems)
    }

    var tags = Object.keys(checkedItems).map((tagName, index) =>
        <TagInput
            value={tagName}
            onChange={handleTagChange}
            key={index}
        />
    )

    useEffect(() => {
        api.getAllPosts()
            .then((res) => {
                console.log("[HomePageContent][isAuthenticated][api][getAllPosts][Ok][res = %O]", res.data.data)

                // hopefuly this is ok??
                setPosts(res.data.data)
            })
            .catch((err) => {
                console.log("[HomePageContent][isAuthenticated][api][getAllPosts][error = %O]", err)
            })
    },
        // eslint-disable-next-line
        [])

    if (posts.length === 0) {
        return (
            <div>
                <div className='flower-hands'>
                    <img src={FlowerHands} alt="Flower Hands" width='300px' height='200px' />
                </div>

                {/* TODO: for the tags pass setSelectedTags as a prop to the subcomponent
                    so for each new tag selected or deselected we have the selectdTags updated in here
                */}

                <div className='posts'>
                    {/* Loading posts, 
                        TODO: maybe spinning stuff
                    */}
                </div>
            </div>
        );
    }



    posts = posts.map((post, index) => <Post page="home" content={post} key={index} />)

    // TODO: aici trebuie sa facem o logica daca se schimba vreun filtru sa faci rerender la postari
    // TODO: variabilele modificate sunt county(judetul) si checkedItems(tagurile)
    return (
        <div>
            <div className='flower-hands'>
                <img src={FlowerHands} alt="Flower Hands" width='300px' height='200px' />
            </div>

            <div className='home-filters'>
                <select className="select-county" value={county} onChange={handleCountyChange}>
                    <option value="" hidden disabled>Select county</option>
                    {CountyList.map((county) => (
                        <option key={county.name + " home - page"} value={county.name}>{county.name}</option>
                    ))}
                </select>
                <div className="home-tags">
                    {/* <TagInput
                        value={"Food"}
                        onChange={handleTagChange}
                    />
                    <TagInput
                        value={"Accomodation"}
                        onChange={handleTagChange}
                    />
                    <TagInput
                        value={"Transport"}
                        onChange={handleTagChange}
                    />
                    <TagInput
                        value={"Clothes"}
                        onChange={handleTagChange}
                    />
                    <TagInput
                        value={"Hygiene products"}
                        onChange={handleTagChange}
                    />
                    <TagInput
                        value={"Other"}
                        onChange={handleTagChange}
                    /> */}
                    {tags}
                </div>
            </div>

            <div className='posts'>
                {posts}
            </div>
        </div>
    );
}


export default HomePageContent;
