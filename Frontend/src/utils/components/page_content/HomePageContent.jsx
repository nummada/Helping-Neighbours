import api from '../../../api'
import FlowerHands from '../../../assets/hands-with-flowers.png'
import Post from '../Post'

import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const HomePageContent = () => {
    var { isAuthenticated, user } = useAuth0();
    var [posts, setPosts] = useState([])
    var [setectedTags, setSelectedTags] = useState([])

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
                    <img src={FlowerHands} alt="Flower Hands" width='300px' height='200px'/>
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

    posts = posts.map((post, index) => <Post page="home" content={post} key={index}/>)

    return (
        <div>
            <div className='flower-hands'>
                <img src={FlowerHands} alt="Flower Hands" width='300px' height='200px'/>
            </div>
            
            <div className='posts'>
                {/* TODO: aici trebuie sa dam datele ca param, nu hardcodate in Post */}
                
                {posts}
            </div>
        </div>
    );
}


export default HomePageContent;
