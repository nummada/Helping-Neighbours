import Post from "../Post";

const MyPostsContent = () => {

    return (
        <div className="my-posts-layout">
            <div className="page-title">
                Your posts
            </div>
            <div className='posts'>
                <Post page="posts"/>
                <Post page="posts"/>
                <Post page="posts"/>
                <Post page="posts"/>
            </div>
        </div>
    );
}


export default MyPostsContent;
