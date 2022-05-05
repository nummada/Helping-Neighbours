import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import api from "../../../api";
import Post from "../Post";

const MyPostsContent = () => {
    var { user, isAuthenticated } = useAuth0()
    var [posts, setPosts] = useState([])

    useEffect(() => {
        console.log("[My posts][isAuthenticated][%O]", isAuthenticated)

        if (!isAuthenticated) {
            return
        }

        var benefId = user.sub // auth0Id

        api.getPostsByBenefId(benefId)
        .then((res) => {
            console.log("[MyPostsContent][api][getPostsByBenefId][Ok][res = %O]", res.data)

            setPosts(res.data.data)
        })
        .catch((err) => {
            console.log("[MyPostsContent][api][getPostsByBenefId][error = %O]", err)
        })

    },
    [user, isAuthenticated])

    if (!isAuthenticated || posts.length === 0) {
        return (
            <div className="my-posts-layout">
                <div className="page-title">
                    Your posts
                </div>
                <div className='posts'>
                    {/* TODO: Loading spinner? */}
                </div>
            </div>
        );
    }

    var postComponents = posts.map((post, index) => <Post page='post' content={post} key={index}/>)

    return (
        <div className="my-posts-layout">
            <div className="page-title">
                Your posts
            </div>
            <div className='posts'>
                {postComponents}
            </div>
        </div>
    );
}


export default MyPostsContent;
