import api from '../../../api'
import FlowerHands from '../../../assets/hands-with-flowers.png'
import Post from '../Post'
import { useState, useEffect } from "react";
import TagInput from '../TagInput';
import CountyList from '../CountyList';

const HomePageContent = () => {
    var [posts, setPosts] = useState([])
    var [postsBuffer, setPostsBuffer] = useState([])
    var [setectedTags, setSelectedTags] = useState([])
    var [county, setCounty] = useState("All");
    var checkedItems = {
        "Food": false,
        "Accomodation": false,
        "Transport": false,
        "Clothes": false,
        "Hygiene products": false,
        "Other": false
    }
    var [filterTags, setFilterTags] = useState(checkedItems)


    const handleCountyChange = (event) => {
        setCounty(event.target.value);
    }

    const handleTagChange = (event) => {
        var item = event.target.value;
        setFilterTags((oldTags) => {
            return {
                ...oldTags,
                [item]: !oldTags[item]
            }
        })
        console.log("[HomePageContent][handleTagChange]\n\t", checkedItems)
    }

    var tags = Object.keys(checkedItems).map((tagName, index) =>
        <TagInput
            value={tagName}
            onChange={handleTagChange}
            key={index}
            isChecked={filterTags[tagName]}
        />
    )

    useEffect(() => {
        var posts = []

        if (Object.keys(filterTags).filter(key => filterTags[key]).length === 0) {
            api.getAllPosts()
                .then((res) => {
                    console.log("[HomePageContent][isAuthenticated][api][getAllPosts][Ok][res = %O]", res.data)

                    // hopefuly this is ok??
                    // setPosts(res.data.data)
                    // posts = res.data.data
                    setPostsBuffer(res.data.data)
                })
                .catch((err) => {
                    console.log("[HomePageContent][isAuthenticated][api][getAllPosts][error = %O]", err)
                })
        } else {
            api.getPostsByTags(filterTags)
                .then((res) => {
                    console.log("[HomePageContent][isAuthenticated][api][getPostsByTags][Ok][res = %O]", res.data)

                    // hopefuly this is ok??
                    // setPosts(res.data.data)
                    // posts = res.data.data
                    setPostsBuffer(res.data.data)
                })
                .catch((err) => {
                    console.log("[HomePageContent][isAuthenticated][api][getPostsByTags][error = %O]", err)
                })
        }

        // if (county !== 'All') {
        //     posts = posts.filter((post) => post.benefCounty === county)
        // }
        // setPosts(posts)
    },
        // eslint-disable-next-line
        [filterTags, county])

    
    useEffect(() => {
        console.log("[useEffect la bufer posts][county = %O][bufferPosts = %O]", county, postsBuffer)
        var localPosts = postsBuffer
        if (county !== 'All') {
            localPosts = postsBuffer.filter((post) => post.benefCounty === county)
        }
        setPosts(localPosts)
    },
    [postsBuffer])

    if (posts.length === 0) {
        return (
            <div>
                <div className='flower-hands'>
                    <img src={FlowerHands} alt="Flower Hands" width='300px' height='200px' />
                </div>

                <div className='home-filters'>
                    <select className="select-county" value={county} onChange={handleCountyChange}>

                        <option value="All">All</option>

                        {CountyList.map((county) => (
                            <option key={county.name + " home - page"} value={county.name}>{county.name}</option>
                        ))}
                    </select>
                    <div className="home-tags">
                        {tags}
                    </div>
                </div>

                <div className='posts'>
                    {/* Loading posts, 
                        TODO: maybe spinning stuff
                    */}
                </div>
            </div>
        );
    }

    posts = posts.map((post, index) => <Post page="home" content={post} key={index} />)

    return (
        <div>
            <div className='flower-hands'>
                <img src={FlowerHands} alt="Flower Hands" width='300px' height='200px' />
            </div>

            <div className='home-filters'>
                <select className="select-county" value={county} onChange={handleCountyChange}>
                <option value="All">All</option>
                    {CountyList.map((county) => (
                        <option key={county.name + " home - page"} value={county.name}>{county.name}</option>
                    ))}
                </select>
                <div className="home-tags">
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
